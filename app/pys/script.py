# script.py
import sys
import json

def main():
    data = {
        "message": "Hello from Python!",
        "success": True,
        "system_info": {
            "python_version": sys.version,
            "version_info": sys.version_info
        },
        "environment_info": {
            "os": sys.platform,
            "version": sys.version_info.major
        }
    }
    print(json.dumps(data))

if __name__ == "__main__":
    main()
