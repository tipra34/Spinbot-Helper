let spinInput = document.getElementById("spin_input")
let reverseSpinInput = document.getElementById("reverse_spin_input")
let tagsInput = document.getElementById("tags_input")
let outputTextArea = document.getElementById("output")

function spin(){
  tags={}
  input = spinInput.value;
  let output = ""
  for(let i = 0; i<input.length; i++){
      output += input[i]
    if(input[i] == "<"){
      let tag = ""
      i++
      while(input[i] != ">"){
        tag += input[i]
        i++
      }
      let hash = md5(tag)
      tags[hash] = tag
      output += hash
      output += input[i]
    }
  }
  tagsInput.value = JSON.stringify(tags)
  outputTextArea.value = output
}

function reverseSpin(){
  let input = reverseSpinInput.value
  let tags = JSON.parse(tagsInput.value)

  let output=""

  for(let i=0; i<input.length; i++){
    output += input[i]
    let hash = ""
    if(input[i] == "<"){
      i++
      while(input[i] != ">"){
        hash += input[i]
        i++
      }
      output += tags[hash]
      output += input[i]
    }
  }
    outputTextArea.value = output
}
