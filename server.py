#!/usr/bin/env python3
"""
Локальный веб-сервер для проверки XML-фидов недвижимости.
Запуск: python server.py
Открывает веб-интерфейс по адресу: http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def main():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"==================================================")
        print(f" 🚀 Сервер валидатора XML-фидов успешно запущен!")
        print(f" 🌐 Веб-интерфейс доступен по адресу: {url}")
        print(f" 🛑 Для остановки нажмите Ctrl+C")
        print(f"==================================================")
        
        try:
            webbrowser.open(url)
        except Exception:
            pass
            
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nОстановка сервера...")
            httpd.server_close()
            sys.exit(0)

if __name__ == '__main__':
    main()
