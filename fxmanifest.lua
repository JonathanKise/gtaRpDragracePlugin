resource_manifest_version '44febabe-d386-4d18-afbe-5e627f4af937'
fx_version 'bodacious'
game 'gta5'


client_scripts {
	'@es_extended/locale.lua',
	'client/client.js'
}

server_scripts {
	'@es_extended/locale.lua',
	"@mysql-async/lib/MySQL.lua",
	'server/server.js',
	--'server/get_name.lua',
}


ui_page('client/html/index.html')

files({
    --'client/html/index.html',
    --'client/html/script.js',
    --'client/html/style.css'
})

--[[server_scripts {
	'shared.js',
	'server/server.js'
}]]--