import { RECAPTCHA_SITE_KEY } from "@/configs/env.config"
import type { LayoutType } from "@/types/component.types"
import { ReCaptchaProvider } from "next-recaptcha-v3";

const ContactspageLayout: LayoutType = async ({ children, params }) => {
     const { locale } = await params
     const captchaKey = RECAPTCHA_SITE_KEY

     return (
          <ReCaptchaProvider
               reCaptchaKey={captchaKey}
               id={`${locale}-recaptcha`}
          >
               {children}
          </ReCaptchaProvider>
     )
};

export default ContactspageLayout;