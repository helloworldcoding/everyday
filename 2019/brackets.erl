-module(brackets).

-export([check/1,test/0,match/2]).

test() ->
	true = check(["[","]"]),
	true = check(["[","]","{","}","(",")"]),
	true = check(["[","{","}","]","(",")"]),
	false = check(["[","{","(","}","]","(",")"]).

%% 检测括号是否闭合
%%
%% {}{} [{}]
%% [{]} 没有闭合 [{{}] 没有闭合
%% param List 
%% return bool
check(L) ->
	help(L,[]).

match(Front, End) ->
	case Front of
		"{" when End =:= "}" -> true;
		"[" when End =:= "]" -> true;
		"(" when End =:= ")" -> true;
		_ -> false
	end.

help([H|T],[]) ->
	help(T,[H]);
help([H|T],Stack) ->
	Last = lists:last(Stack),
	case match(Last,H) of
		false -> help(T,lists:append(Stack,[H]));
		true -> help(T,lists:droplast(Stack))
	end;
help([],Stack) ->
	case erlang:length(Stack)  of
		 0 -> true; 
		 _ -> false
	end.

