-module(sort).

-export([quick_sort/1]).


quick_sort([]) -> [];
quick_sort([H|T]) ->
	quick_sort([X || X <-T, X < H ])
	++ [H] ++ 
	quick_sort([ X || X<-T ,X >= H]).
