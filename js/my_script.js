"use strict";
let board = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];
let turns = 1;
let cells;
$(function()
{
  let MoveSideIsChrest = true;
  cells = $('.cell');
  cells.each(function(index, elem){
      $(elem).bind('click', function(){
        if(board[Math.floor(index/3)][index%3] == null)
        {
          board[Math.floor(index/3)][index%3] = MoveSideIsChrest;
          let imgElement = $('<img>').attr({
            src: MoveSideIsChrest ? 'img/x-lg.svg' : 'img/circle.svg',
            class: "w-100 h-100"
          });
          $(cells[index]).append(imgElement);
          
          if(IsWin(index))
          {
            setTimeout(function() {
              alert((MoveSideIsChrest ? "Chrest" : "Circle") + " win");
              location.reload();
              return;
            }, 10);
          }
          else if(turns == 9)
          {
            setTimeout(function() {
              alert("Draw");
              location.reload();
              return;
            }, 10);
          }
          MoveSideIsChrest = !MoveSideIsChrest;
          turns++;
        }
      });
  });
});

function IsWin(i)
{
  if(board[Math.floor(i/3)][0]==board[Math.floor(i/3)][1] && board[Math.floor(i/3)][1]==board[Math.floor(i/3)][2])
  {
    return true;
  }
  if(board[0][i%3]==board[1][i%3] && board[1][i%3]==board[2][i%3])
  {
    return true;
  }
  if(board[1][1]!=null)
  {
    if(board[0][0]==board[1][1] && board[1][1]==board[2][2])
    {
      return true;
    }
    if(board[0][2]==board[1][1] && board[1][1]==board[2][0])
    {
      return true;
    }
  }
  
  return false;
}