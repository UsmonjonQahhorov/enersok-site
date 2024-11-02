'use client';
import type { FC } from 'react';
import { createContext, useContext } from 'react';
import {
  Dialog,
  DialogAction,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { useDialog } from '@/hooks/useDialog';
import { parseLocalizedValue } from '@/utils/parseLocalized.util';

interface UseDialogContext {
  openDialog: () => void;
  closeDialog: () => void;
  isOpen: boolean;
  message: string;
  title: string;
  setMessage: (message: string) => void;
  setTitle: (title: string) => void;
  openSuccesDialog: () => void;
  openErrorDialog: () => void;
}

const UseDialogContext = createContext<UseDialogContext>(
  {} as UseDialogContext,
);
export const useDialogData = () => useContext(UseDialogContext);

export const UseDialogProvider: FC<DialogProviderProps> = ({
  locale,
  children,
}) => {
  const {
    openDialog,
    closeDialog,
    isOpen,
    message,
    title,
    setMessage,
    setTitle,
  } = useDialog();

  const dialogActionText = parseLocalizedValue(locale, {
    ru: 'Закрыть',
    en: 'Close',
    uz: 'Yopish',
  });

  const successMessageTitle = parseLocalizedValue(locale, {
    ru: 'Спасибо!',
    en: 'Thanks!',
    uz: 'Раҳмат!',
  });
  const successMessageText = parseLocalizedValue(locale, {
    ru: 'Ваше сообщение отправлено! Через некоторое время мы свяжемся с вами.',
    en: 'Your message has been sent! We will contact you after a while.',
    uz: 'Сизнинг хабарингиз юборилди! Бироздан кейин сиз билан боғланамиз.',
  });
  const errorMessageTitle = parseLocalizedValue(locale, {
    ru: 'Ошибка!',
    en: 'Error!',
    uz: 'Хато!',
  });
  const errorMessageText = parseLocalizedValue(locale, {
    ru: 'Что-то пошло не так. Попробуйте еще раз.',
    en: 'Something went wrong. Try again.',
    uz: 'Нимадир нотўғри кетди. Қайта уриниб кўринг.',
  });

  const openSuccesDialog = () => {
    setTitle(successMessageTitle);
    setMessage(successMessageText);
    openDialog();
  };
  const openErrorDialog = () => {
    setTitle(errorMessageTitle);
    setMessage(errorMessageText);
    openDialog();
  };

  const value: UseDialogContext = {
    isOpen,
    message,
    title,
    setMessage,
    setTitle,
    openDialog,
    closeDialog,
    openSuccesDialog,
    openErrorDialog,
  };

  return (
    <UseDialogContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onClose={closeDialog}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>{message}</DialogBody>
        <DialogFooter>
          <DialogAction size="lg" onClick={closeDialog}>
            {dialogActionText}
          </DialogAction>
        </DialogFooter>
      </Dialog>
    </UseDialogContext.Provider>
  );
};

interface DialogProviderProps {
  children: React.ReactNode;
  locale: string;
}