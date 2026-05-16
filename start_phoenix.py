import os
import phoenix as px

session = px.launch_app(use_temp_dir=False)
print(f"Phoenix running at: http://localhost:6006")
input("Press Enter to stop...")