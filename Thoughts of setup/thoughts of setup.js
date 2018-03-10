player1=1 (red)
player2=-1 (yellow)
playerturn value= 1 (red) starts

//the board contains 7 col's with 7 arrays.
Col_1 = []

When click the Col_1 // on the board
number_of_clicks_col_1 = number_of_clicks_col_1 + 1
//check if col is full
then if number_of_clicks_col_1 = 6 
alert col is full/or do nothing...throw? Maybe doesn't matter 
since the checking 4-in-a-row-function only check the 
legal arrays values?

//adding the playerturn value into the array at the correct
//position within the array
array col_1[number_of_clicks_col_1-1] = [playerturn value]
//example
player1 turn
click once array = col_1 [1]		number_of_clicks_col_1 1
click twice array = col_1 [1,1]		number_of_clicks_col_1 2
click three array = col_1 [1,1,1]	number_of_clicks_col_1 3

//Now a function for checking if you got 4 in a row.
//checking row 1 (horizontal row)
col_1 [i] + col_2[i] + col_3[i] + col_4[i] = 4 or -4
col_2 [i] + col_3[i] + col_4[i] + col_5[i] = 4 or -4
col_3 [i] + col_4[i] + col_5[i] + col_6[i] = 4 or -4
col_4 [i] + col_5[i] + col_6[i] + col_7[i] = 4 or -4

//checking row 2 (horizontal row) the +1 value determine row (horisontal)
col_1 [i+1] + col_2[i+1] + col_3[i+1] + col_4[i+1] = 4 or -4
col_2 [i+1] + col_3[i+1] + col_4[i+1] + col_5[i+1] = 4 or -4
col_3 [i+1] + col_4[i+1] + col_5[i+1] + col_6[i+1] = 4 or -4
col_4 [i+1] + col_5[i+1] + col_6[i+1] + col_7[i+1] = 4 or -4

//checking col 1 (vertical row)
col_1 [i] + col_1[i+1] + col_1[i+2] + col_1[i+3] = 4 or -4
col_1 [i+1] + col_1[i+2] + col_1[i+3] + col_1[i+4] = 4 or -4
col_1 [i+2] + col_1[i+3] + col_1[i+4] + col_1[i+5] = 4 or -4

//checking col 2 (vertical row)
col_2 [i] + col_2[i+1] + col_2[i+2] + col_2[i+3] = 4 or -4
col_2 [i+1] + col_2[i+2] + col_2[i+3] + col_2[i+4] = 4 or -4
col_2 [i+2] + col_2[i+3] + col_2[i+4] + col_2[i+5] = 4 or -4

//checking sned-right row 1 - row4
col_1 [i] + col_2[i+1] + col_3[i+2] + col_3[i+3] = 4 or -4
col_2 [i] + col_3[i+1] + col_4[i+2] + col_5[i+3] = 4 or -4
col_3 [i] + col_4[i+1] + col_5[i+2] + col_6[i+3] = 4 or -4
col_4 [i] + col_5[i+1] + col_6[i+2] + col_7[i+3] = 4 or -4

//checking sned-right row 2 to row 5
col_1 [i+1] + col_2[i+2] + col_3[i+3] + col_3[i+4] = 4 or -4
col_2 [i+1] + col_3[i+2] + col_4[i+3] + col_5[i+4] = 4 or -4
col_3 [i+1] + col_4[i+2] + col_5[i+3] + col_6[i+4] = 4 or -4
col_4 [i+1] + col_5[i+2] + col_6[i+3] + col_7[i+4] = 4 or -4

//checking sned-right row 3 - row 6
col_1 [i+2] + col_2[i+3] + col_3[i+4] + col_3[i+5] = 4 or -4
col_2 [i+2] + col_3[i+3] + col_4[i+4] + col_5[i+5] = 4 or -4
col_3 [i+2] + col_4[i+3] + col_5[i+4] + col_6[i+5] = 4 or -4
col_4 [i+2] + col_5[i+3] + col_6[i+4] + col_7[i+5] = 4 or -4

//checking sned-left col 4 - col 1 (row 1-4)
col_4[i] + col_3[i+1] + col_2[i+2] + col_1[i+3] = 4 or -4
col_5[i] + col_4[i+1] + col_3[i+2] + col_2[i+3] = 4 or -4
col_6[i] + col_5[i+1] + col_4[i+2] + col_3[i+3] = 4 or -4
col_7[i] + col_6[i+1] + col_5[i+2] + col_4[i+3] = 4 or -4

//checking sned-left col 4 - col 1 (row 2-5)
col_4[i] + col_3[i+1] + col_2[i+2] + col_1[i+3] = 4 or -4
col_5[i] + col_4[i+1] + col_3[i+2] + col_2[i+3] = 4 or -4
col_6[i] + col_5[i+1] + col_4[i+2] + col_3[i+3] = 4 or -4
col_7[i] + col_6[i+1] + col_5[i+2] + col_4[i+3] = 4 or -4

//Now a function to change playerturn
if playerturn value = 1 then playerturn value = -1
	else playerturn value = 1