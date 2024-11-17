function display(val){
    document.getElementById('result') .value += val;
  }
  function calculate(){
    let x = document.getElementById('result').value
    var y
    if(x == '😀+🐱'){y='🥰'}
    else if(x == '😀+🦐'){y='😋'}
    else if(x == '😀+🍫'){y='🤤'}
    else if(x == '😀+😀+🍷'){y='🥂'}
    else if(x == '😀+🍷'){y='😴💫'}
    else if(x == '😀+🍷+🍷'){y='🤮'}
    else if(x == '😀+🍷+🍷+🍷'){y='🚑'}
    else if(x == '😀+🍄'){y='😵'}
    else if(x == '😀+💻'){y='👩‍💻'}
    else if(x == '😀+🎸'){y='🤘'}
    else if(x == '😀+🧻'){y='🚽'}
    else if(x == '😀+👽'){y='😨'}
    else if(x == '😀+🔍'){y='👴'}
    else if(x == '😀+🚽'){y='🧻?'}
    else if(x == '😀+🚽+🧻'){y='💩'}
    else if(x == '🦐+💻'){y='不是，哥们'}
    else if(x == '🐱+🦐'){y='😻'}
    else if(x == '🐱+🍫'){y='🪦'}
    else if(x == '🐱+🍷'){y='🫗'}
    else if(x == '🐱+🍄'){y='😾'}
    else if(x == '🐱+💻'){y='😑👋'}
    else if(x == '🐱+🎸'){y='😼🤘'}
    else if(x == '🐱+🧻'){y='😸🧶'}
    else if(x == '🐱+👽'){y='🙀'}
    else if(x == '🐱+🔍'){y='👀'}
    else if(x == '🐱+🚽'){y='💩😑'}
    else if(x == '🍫+😀'){y='🤤'}
    else if(x == '🍫+🐱'){y='🪦'}
    else if(x == '🍫+🍷'){y='🤔'}
    else if(x == '🍫+🍄'){y='😖'}
    else if(x == '🍫+💻'){y='🧻'}
    else if(x == '🍷+💻'){y='🫗😱🧻'}
    else if(x == '🍷+🎸'){y='🖕🤪💫🖕'}
    else if(x == '🍷+🧻'){y='😭💔'}
    else if(x == '🍷+👽'){y='👽👍'}
    else if(x == '🍷+🔍'){y='🧐'}
    else if(x == '🍷+🚽'){y='🤮'}
    else if(x == '🍄+👽'){y='👽👍'}
    else if(x == '🍄+🔍'){y='🐛'}
    else if(x == '🍄+🚽'){y='🤮🚑'}
    else if(x == '💻+🎸'){y='🎼'}
    else if(x == '💻+👽'){y='👽?!'}
    else if(x == '💻+🔍'){y='google'}
    else if(x == '🎸+😀'){y='🤘'}
    else if(x == '🎸+👽'){y='👽🤘'}
    else if(x == '🎸+🐱'){y='😼🤘'}
    else if(x == '🎸+💻'){y='🎼'}
    else if(x == '🎸+🍷'){y='🖕🤪💫🖕'}
    else if(x == '👽+🎸'){y='👽🤘'}
    else if(x == '👽+💻'){y='👽?!'}
    else if(x == '👽+🍄'){y='👽👍'}
    else if(x == '👽+🍷'){y='👽👍'}
    else if(x == '👽+🍫'){y='👽👍'}
    else if(x == '👽+🐱'){y='👽💓🛸'}
    else if(x == '👽+😀'){y='🛸'}
    else if(x == '😀-😀'){y='🪦'}
    else if(x == '😀-🐱'){y='😭'}
    else if(x == '😀-🦐'){y='😤'}
    else if(x == '😀-🍫'){y='🥺'}
    else if(x == '😀-🍷'){y='😩'}
    else if(x == '😀-💻'){y='😩'}
    else if(x == '😀-🎸'){y='😩🦵🪦'}
    else if(x == '😀-👽'){y='😌💨🌏🕊'}
    else if(x == '🐱-😀'){y='😼'}
    else{y='error'}


    document.getElementById('result').value = y
  }
  function clearscreen(){
    document.getElementById('result').value = ''
  }
  