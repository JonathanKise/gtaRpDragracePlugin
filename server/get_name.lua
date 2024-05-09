
function getIdentity(source, callback)
	local identifier = GetPlayerIdentifiers(source)[1]
	
	MySQL.Async.fetchAll("SELECT * FROM `characters` WHERE `identifier` = @identifier",
	{
		['@identifier'] = identifier
	}, function(result)
		if result[1]['firstname'] ~= nil then
			local data = {
				identifier	= result[1]['identifier'],
				firstname	= result[1]['firstname'],
				lastname	= result[1]['lastname'],
				dateofbirth	= result[1]['dateofbirth'],
				sex			= result[1]['sex'],
				height		= result[1]['height']
			}
			callback(data['firstname'])
		else
			local data = {
				identifier	= '',
				firstname	= '',
				lastname	= '',
				dateofbirth	= '',
				sex			= '',
				height		= ''
			}
			
			callback(data['firstname'])
		end
	end)
end


RegisterServerEvent('blackjack:server_get_name')
AddEventHandler('blackjack:server_get_name', function()
	--print('getting playing name from server')
	--print(source);

	--[[for k,v in pairs(GetPlayerIdentifiers(source))do
		print(v)
		
	end --]]
	
	local identifier = GetPlayerIdentifiers(source)[1]
	--print(identifier)
	
	
	
	
	local test = 0
	local source = source
	
	
	
	local results = MySQL.Async.fetchAll("SELECT * FROM `users` WHERE `identifier` = @identifier",
	{
		['@identifier'] = identifier
	},
	function(results)
		--print(results[1].firstname)
		--print(source)
		--print(test)
		TriggerClientEvent('blackjack:client_name_received', source, results[1].firstname)
	end)
end)