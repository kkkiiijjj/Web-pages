function display(val){
    document.getElementById('result').value += val;
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
    else if(x == '🍷+👽'){y='👽💫👍'}
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
    else{y='🤔我想不出它们有什么联系'}


    document.getElementById('result').value = y
  }
  function clearscreen(){
    document.getElementById('result').value = ''
  }
  