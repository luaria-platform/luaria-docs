---
sidebar_position: 1
---

# Logging
LuAria includes a builtin log console you can open at any time:  
1. Press and `hold` the LuAria loader button (3d-touch)
2. Tap `Show Mini Console` from the menu

Logs in the console are color-coded for easy debugging:
- `White:` normal output
- `Yellow:` warnings
- `Red:` errors

## API
It is recommanded to use `loader.log(...)` since it's directly hooked up with the loaders console.
```lua
loader.log("The")
loader.log("loader", "checked", "here.")
```

Use standard `print(...)` to send a message to the console:
```lua
print("Lua was here!")
```

And that is how logging is done within LuAria its pretty straight foward, happy modding :)