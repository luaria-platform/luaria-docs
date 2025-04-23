---
sidebar_position: 1
sidebar_label: Types & Values
---

# Types and Values
Lua is a dynamically typed language. There are no type definitions; This means that each value contains its own value.

Lua doesn’t have variable data types, but weirdly enough its values carries the type with it. Here is a table listing all eight Lua value types.
| Value Type | Description                                      |
|------------|--------------------------------------------------|
| `nil`      | The absence of a useful value                    |
| `boolean`  | `true` or `false`                                |
| `number`   | Real (double-precision floating-point) numbers   |
| `string`   | Array of characters                              |
| `function` | Compute and return values                        |
| `table`    | Ordinary arrays (key->value pairs)               |
| `userdata` | Arbitrary C data                                 |
| `thread`   | Independent coroutines (lightweight threads)     |

## Detecting Types
Lua has a function named `type` which enables us to know the type of a value. Here are some examples of how to use the 
```type(value: any) -> string``` function.
```lua
print(type("Hi World"))  --> string
print(type(5.4*2))      --> number
print(type(print))       --> function
print(type(type))        --> function
print(type(true))        --> boolean
print(type(nil))         --> nil
print(type(type(X)))     --> string
```
**Output**  
When you run the following code above you get these results:
```
string
number
function
function
boolean
nil
string
```

Variables have no predfine types in Lua; this means that any variable you define can use the value of any type.
```lua
print(type(a))   --> nil   (`a' is not initialized)
a = 10
print(type(a))   --> number
a = "a string!!"
print(type(a))   --> string
a = print        -- yes, this is valid!
a(type(a))       --> function
```

**Output**
```
nil
number
string
function
```

:::tip 

When you write Lua code it is highly recommanded that you do not use a single variable for many diffrent types--as this makes the code a mess and may end up confusing you or new people trying to learn from your code.

:::

This wraps up this very valuable tutorials on types and values. For more information, reference the offical Lua manual on basic types: [Lua 5.4 Reference Manual](https://www.lua.org/pil/2.html)