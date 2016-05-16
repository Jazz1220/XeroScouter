{
	"targets": [
		{
			"target_name": "opr",
			"sources": [ "src/cpp/opr.cpp"],
			"include_dirs": ['src/include/'],
			"cflags" : [
				"-std=c++14",
				"-Lmysqlclient-dev",
				"-Iusr/include/mysql"
			]
		}
	]
}
