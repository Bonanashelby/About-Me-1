var names = ['Adam', 'Amanda', 'Mika'];

var i = 5;

do {
  console.log('index of loop' + i);
  var currentName = names[i];

  if (currentName === 'Amanda') {
    console.log('This is Amanda!!!');
  }
}

  console.log('Name at index: ' + currentName);

  i++;
} while (i < names.length); 
