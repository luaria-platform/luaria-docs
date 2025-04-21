---
sidebar_position: 3
sidebar_label: 2. Create & Build New Mod
---

# Creating a new mod
1. Open the loader and navigate to the `Editor` tab.
2. On the top right corner tap the `3 dots (⁝)` to show options alert.
3. Choose `Create Mod/Import Mod` from the alert options. A new window titled `New Mod` will appear.
4. In the new window, fill in the following details:
    - `Name:` (e.g, Red's World)
    - `Developer:` (e.g, yourname)
    - `Identifier:` (e.g, com.red16.redsworld)
    - `Version:` (e.g, 1.0) [`Buggy` tap on field & hit done]

Once all fields are filled, tap `Create` in the top right corner.

## Files
After tapping create; your `mod (e.g, folder, Red's World)` will appear in the `Editor`. The folder contains the following default files:
- `init.lua ` - This is the root of each LuAria mod, although this file is small each mod needs to implment it. default code for `init.lua`
```lua
--
-- init.lua
-- LuAria
-- 
-- Copyright (c) 2025 Rednick16.
--

local main_loaded, main_module = pcall(require, "main")

if not main_loaded then
    error("Failed to load 'main' module: " .. tostring(main_module))
end

if type(main) ~= "function" then
    error("'main' module loaded, but global 'main' function not found. Please define a global 'main' function in your 'main.lua' file.")
end

loader.addEventListener(0, main)
```
- `main.lua` - This file should contain the main code that will get executed. default code for `main.lua`: 
```lua
--
-- main.lua
-- LuAria
-- 
-- Copyright (c) 2025 YourName.
--

local loader = require("loader")

function main()
    loader.alert("Hello World!", "This is my first mod")
end
```
- `config.json` - This json file is extreamly important. the slightest wrong edit in it will break ur build. excercise caution when making changes.
- `ModIcon.png` - This is the mods icon that gets displayed next to it in the mod library, its optional.

## Build, Test & Run
First lets start of by tapping on the 3 dots (⁝) icon in the top right corner of your mod folder, you will notice following options:
- `Run:` Build and run the mod.
- `Archive:` To archive (e.g, .zip) your mod folder.
- `Build:` To compile and package your mod.
- `Stop:` To stop the mod process.
- `New Folder:` To create a new folder in your mods - directory (e.g, folder).
- `New File:` To create a new file in your mods - directory (e.g, folder).

:::danger

Whenever you create a new `.lua file` in your mod project, don't forget to add it to the `config.json file.` This ensures that the mod loader recognizes it and includes it in the build process. For example, if your create a new file (e.g,  `newfile.lua`), you need to update the config.json file under the `"Compile Sources"` section, like so:

```json
"Build Phases" : {
    "Compile Sources" : [
        "init.lua",
        "main.lua",
        "newfile.lua"
    ],
    "Copy Mod Resources" :[
        "ModIcon.png"
    ]
}
```

:::

:::warning

Currently accessing `nesting` folders within the `.lua` script is not supported example:

```lua
-- utils is a folder
-- config.lua is inside the utils folder (utils/config.lua)

local config = require("utils.config")  -- This will not work
```

:::

:::note

The Editor is currently in early access. There are known bugs and the editor is difficult to navigate. many unimplemented QOL features. 

:::