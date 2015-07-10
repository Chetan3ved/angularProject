#!/bin/bash
arg1=$1
if [ $arg1 == "dist" ]
then
	node node_modules/http-server/bin/http-server target -p 8083
	
else
	node node_modules/http-server/bin/http-server public -p 8080
fi