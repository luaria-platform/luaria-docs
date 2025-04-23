---
sidebar_position: 2
sidebar_label: System Alerts
---

# System Alerts
Just as the name describes, In this tutorial we will learn how to show a system alert :)

:::warning 

Only use alerts from the main thread. because LuAria supports multi-threading you are not allowed to call system alerts within them.

:::

Use `loader.alert(...)` to display a native alert popup:
```lua
loader.alert(
    "Hello World!",          -- Title
    "This is a test alert.", -- Description
    "ok"                     -- Button
)
```

## Why use alerts?
Showing alerts can be a quick & easy way to show an issue or some useful information to the player, whether to use alerts or not is up to you.
```lua
loader.alert(
  "Warning",
  "This will delete your world. Continue?",
  "Proceed"
)
```