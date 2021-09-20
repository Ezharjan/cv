local function commander(argToExcute)
    print('argument is: ',argToExcute)
    local result = io.popen(argToExcute)
    local strInfo = result:read("*all")
    return strInfo
end

function tryTillSucceed(arg,tryTimes)
    tryTimes = tryTimes or 1000
    for i = 1,tryTimes,1 do
        local res = commander(arg)
        if res ~= '' then
            print('Conduction succeeded!')
            break
        end
    end
    return
end

local pushCmd =  'git push -u origin master'
local pullCmd =  'git pull'

commander('git add .')
commander('git commit -m "renewed"')
tryTillSucceed(pushCmd)
tryTillSucceed(pullCmd)
