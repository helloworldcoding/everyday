-module(dimen2).

-export([count/1,test/0]).

test() ->
	1 = count([
			   [1,1,1],
			   [1,0,1],
			   [1,1,1]
			  ]),
	2 = count([
			   [1,1,1,1,1],
			   [1,0,1,0,1],
			   [1,1,1,1,1]
			  ]).

count(L) ->
	L.
