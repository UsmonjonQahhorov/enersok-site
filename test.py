import requests
import xml.etree.ElementTree as ET

FEED_URL = "https://techno-food.uz/wp-content/uploads/woo-product-feed-pro/xml/hwbj9r920xovrvsoqd6kn45kylbvsa93.xml"

def check_url(url):
    try:
        r = requests.get(url, timeout=10)
        return r.status_code
    except Exception as e:
        return f"ERROR: {e}"

def parse_feed(feed_url):
    r = requests.get(feed_url)
    root = ET.fromstring(r.content)

    namespace = {"g": "http://base.google.com/ns/1.0"}

    for item in root.findall(".//item"):
        product_id = item.find("g:id", namespace).text if item.find("g:id", namespace) is not None else None
        title = item.find("g:title", namespace).text if item.find("g:title", namespace) is not None else None
        product_link = item.find("g:link", namespace).text if item.find("g:link", namespace) is not None else None
        image_link = item.find("g:image_link", namespace).text if item.find("g:image_link", namespace) is not None else None
        price = item.find("g:price", namespace).text if item.find("g:price", namespace) is not None else None

        print("="*80)
        print("Product ID:", product_id)
        print("Title:", title)
        print("Price:", price)

        if product_link:
            status = check_url(product_link)
            print("Product URL:", product_link)
            print("Status:", status)

        if image_link:
            status = check_url(image_link)
            print("Image URL:", image_link)
            print("Status:", status)

if __name__ == "__main__":
    parse_feed(FEED_URL)