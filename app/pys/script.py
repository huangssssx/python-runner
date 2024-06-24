# script.py
import sys
import json

def main():
    data = {
        "message": "Hello from Python!",
        "success": True
    }
    print(json.dumps(data))

if __name__ == "__main__":
    main()
