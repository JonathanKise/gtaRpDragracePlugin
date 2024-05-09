fx_version 'bodacious'
game 'gta5'

description 'Drag Racing Mini Event'
version '1.0.0'

client_scripts {
  '@es_extended/locale.lua',
	'client/client.js'
}

server_scripts {
	'@es_extended/locale.lua',
	"@mysql-async/lib/MySQL.lua",
	'server/server.js',
	
}

server_scripts {
	'server.lua'
}