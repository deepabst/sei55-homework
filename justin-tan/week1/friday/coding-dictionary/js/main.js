console.log(`Dictionary`)

const dictionary = {

  definitions: {
    method: 'a fucntion which lives in an object (i.e. a function which is the value of an object key)',

    scope: 'the visibility of a variable within a program, i.e. the section of code within which a variable can be accessed',

    'variadic function': 'a function which can accept a varying number of arguments from one call to the next',

    arity: 'the number of arguments a function accepts',
  },

  lookupTerm: function( term ){

    term = term.toLowerCase()  
    
    if ( term in this.definitions ) {
      console.log(`%c${term}:`, 'color: green',  this.definitions[term] )
    } else {
      console.log(`%cSorry. '${term}' is not in the dictionary.`, 'color: orange')
    }  

  }, // lookupTerm

  printAllDefinitions: function () {

    //TODO: list definitions in alphabetical order

    let termsCount = 0

    for (const key in this.definitions) {
      // console.log(key, this.definitions[key])
      this.lookupTerm( key );
      termsCount++
    } // for-in
    console.log(`Total entries: ${  termsCount  }`)
  }, // print all Definitions

  addDefinition: function( term, definition) {

    term = term.toLowerCase() // avoid weird duplicates

    if ( term in this.definitions ) {
      console.log(`This term is already defined`)
    } else {
      this.definitions[term] = definition; // actually add to definitions
      console.log(`Term added.`)
      
    }
    
    this.lookupTerm ( term )

  },

  removeDefinition: function ( term ){

  }, //removeDefinition()

  searchAllDefinitions: function ( searchText ){

  }, // searchAllDefinitions()


} // dictionary

