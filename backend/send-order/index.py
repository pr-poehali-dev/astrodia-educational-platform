"""
Отправка заявки на подписку Астродея на email владельца платформы.
Получает имя, email и выбранный тариф от пользователя, отправляет уведомление на почту.
"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def get_smtp_config(email: str):
    if "gmail.com" in email:
        return "smtp.gmail.com", 587
    elif "yandex.ru" in email or "ya.ru" in email:
        return "smtp.yandex.ru", 587
    elif "mail.ru" in email or "inbox.ru" in email or "list.ru" in email or "bk.ru" in email:
        return "smtp.mail.ru", 587
    else:
        return "smtp.gmail.com", 587


def handler(event: dict, context) -> dict:
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    try:
        body = json.loads(event.get("body", "{}"))
        name = body.get("name", "").strip()
        email = body.get("email", "").strip()
        plan = body.get("plan", "").strip()
        phone = body.get("phone", "").strip()

        if not name or not email or not plan:
            return {
                "statusCode": 400,
                "headers": cors_headers,
                "body": json.dumps({"error": "Заполните все обязательные поля"}),
            }

        owner_email = os.environ.get("SMTP_EMAIL", "")
        smtp_password = os.environ.get("SMTP_PASSWORD", "")
        smtp_host, smtp_port = get_smtp_config(owner_email)

        # Письмо владельцу
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"🌟 Новая заявка на подписку — {plan}"
        msg["From"] = owner_email
        msg["To"] = owner_email

        html_body = f"""
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #FDF6E3; border-radius: 12px; border: 1px solid rgba(212,175,55,0.3);">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="color: #D4AF37; font-size: 28px; margin: 0 0 4px;">АСТРОДЕЯ</h1>
            <p style="color: #7C6458; font-style: italic; margin: 0; font-size: 13px;">Новая заявка на подписку</p>
          </div>
          <div style="background: #FFF8E7; border-radius: 8px; padding: 20px; border: 1px solid rgba(212,175,55,0.25); margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #7C6458; font-size: 13px; width: 120px;">Имя:</td><td style="padding: 8px 0; color: #3A2218; font-weight: bold;">{name}</td></tr>
              <tr><td style="padding: 8px 0; color: #7C6458; font-size: 13px;">Email:</td><td style="padding: 8px 0; color: #3A2218; font-weight: bold;"><a href="mailto:{email}" style="color: #D4AF37;">{email}</a></td></tr>
              {'<tr><td style="padding: 8px 0; color: #7C6458; font-size: 13px;">Телефон:</td><td style="padding: 8px 0; color: #3A2218; font-weight: bold;">' + phone + '</td></tr>' if phone else ''}
              <tr><td style="padding: 8px 0; color: #7C6458; font-size: 13px;">Тариф:</td><td style="padding: 8px 0;"><span style="background: #D4AF37; color: #3A2218; padding: 3px 12px; border-radius: 20px; font-size: 13px; font-weight: bold;">{plan}</span></td></tr>
            </table>
          </div>
          <p style="color: #7C6458; font-size: 13px; text-align: center; margin: 0;">
            Ответьте на это письмо или напишите напрямую: <a href="mailto:{email}" style="color: #D4AF37;">{email}</a>
          </p>
        </div>
        """

        msg.attach(MIMEText(html_body, "html", "utf-8"))

        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.ehlo()
            server.starttls()
            server.login(owner_email, smtp_password)
            server.sendmail(owner_email, owner_email, msg.as_string())

        # Письмо клиенту
        client_msg = MIMEMultipart("alternative")
        client_msg["Subject"] = "Ваша заявка на Астродею принята"
        client_msg["From"] = owner_email
        client_msg["To"] = email

        client_html = f"""
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #FDF6E3; border-radius: 12px; border: 1px solid rgba(212,175,55,0.3);">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="color: #D4AF37; font-size: 28px; margin: 0 0 4px;">АСТРОДЕЯ</h1>
            <p style="color: #7C6458; font-style: italic; margin: 0; font-size: 13px;">Платформа целостной астрологии</p>
          </div>
          <h2 style="color: #5C3D2E; font-size: 20px; margin-bottom: 12px;">Здравствуйте, {name}!</h2>
          <p style="color: #5C3D2E; line-height: 1.7; margin-bottom: 16px;">
            Мы получили вашу заявку на тариф <strong style="color: #D4AF37;">{plan}</strong>. В течение 24 часов вы получите инструкции по оплате и доступ к платформе.
          </p>
          <div style="background: #FFF8E7; border-radius: 8px; padding: 16px; border: 1px solid rgba(212,175,55,0.25); margin-bottom: 20px;">
            <p style="color: #7C6458; font-size: 13px; margin: 0; font-style: italic;">
              «Небо говорит — мудрый слушает»
            </p>
          </div>
          <p style="color: #7C6458; font-size: 13px; line-height: 1.6;">
            Если возникнут вопросы — ответьте на это письмо.
          </p>
        </div>
        """
        client_msg.attach(MIMEText(client_html, "html", "utf-8"))

        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.ehlo()
            server.starttls()
            server.login(owner_email, smtp_password)
            server.sendmail(owner_email, email, client_msg.as_string())

        return {
            "statusCode": 200,
            "headers": cors_headers,
            "body": json.dumps({"success": True}),
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": cors_headers,
            "body": json.dumps({"error": "Ошибка отправки. Попробуйте позже."}),
        }
