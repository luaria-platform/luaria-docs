---
sidebar_position: 3
sidebar_label: Event Listeners
---

# Event Listeners
This is the most important thing in LuAria, without it modding would most likly not be possible. We use our own loop system since we can't override (hook) game functions. In this section you will learn how to use LuAria's event listener system and what it is for.

Currently LuAria doesn’t have many listeners.
The listeners consist of mod life-cycle events, joining the main threads loop system, and imguis rendering delegate.

:::note

This page will be updated in the near future to include examples for the modding api.

:::

## Adding Event Listeners
LuAria uses numbers for its events, this is because it is much faster during development.

:::info Notice

In the future I will provide constants as part of `loader` table, I should've done this before writing the docs but o-well, I don't see these values changing in the foreseeable future.

:::

Let us begin we will be using 
`loader.addEventListener(eventType: number, callback: function) -> nil` to register and listen in on events that happens during the mods life-cycle :)

Here is a table for the event types this function takes.
| Value | Action           | Dispatched When…                          |
|-------|:----------------:|:------------------------------------------|
| 0     | Mod load         | Right after your mod is loaded            |
| 1     | Mod unload       | Just before your mod is unloaded          |
| 2     | ImGui render     | Each frame during the ImGui render pass   |
| 3     | Main thread      | Every game tick (~60 FPS)                 |

Less talking and more action. Lets register the onLoad for when a mod gets loaded/enabled
~~~lua
local function onLoad()
    loader.log("Loaded:", loader._MODINFO["MLModName"], "by", loader._MODINFO["MLModDeveloper"], "Version:", loader._MODINFO["MLModVersion"])
end

loader.addEventListener(0, onLoad)
~~~


Lets say we wanted to register for an update function which gets called at 60fps each call, we would register a listener for it like this
~~~lua
-- define the callback
local function onUpdate(deltaTime, fps)
    -- deltaTime: time since the last tick
    -- fps: actaul frames per second
    loader.log("deltaTime: " .. deltaTime .. " fps: " .. fps)
end

-- pass the callback to the register
loader.addEventListener(3, onUpdate)
~~~

:::tip Best Practices & Tips

It is highly recommanded that you do not perform heavy computational work within the update since it gets called on the main thread every frame. Otherwise you will notice the side effects; low fps, slow gameplay and UI freezes.

:::

Lets register the imgui render callback and lets create a window wich will show some text with an infite counter.


:::warning Caution

Before registering the ImGui callback, make sure that you have required the ImGui module.
It is recommanded to only register 1 callback for ImGui rendering.

:::
~~~lua
local ImGui = require("loader.imgui")

-- local counter is outside of the rendering callback otherwise it would reset every frame.
local counter = 0
local function renderImGui()
    ImGui.Begin("Counter Window")
    ImGui.Text("Counting: " .. counter)
    ImGui.End()

    counter = counter + 1
end

-- pass the callback to the register
loader.addEventListener(2, renderImGui)
~~~

:::info Result

A floating imgui window updates every frame with your counter, counting.

:::

:::warning Knowledge Notice

It is recommanded that you have some ImGui knowledge before you make use of this API, all-though imgui is pretty easy to use, for a beginer it is quite complex espically since the modder needs to keep track of Begin/End calls. 

:::

Lets wrap-up with registering the unload event listener, the reason this function exists is to give you the options to undo modifications you've made to the game if possible. I highly recommand you make use of this.
~~~lua
local function onUnload()
    -- undo any game changes / mod setting changes.
end

loader.addEventListener(1, onUnload)
~~~

With that being said you are all set to start using the listeners how ever you see fit :), have fun and take care