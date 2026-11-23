const input=document.getElementById('help-search'),status=document.getElementById('search-status'),empty=document.getElementById('no-results');
if(input&&status&&empty){
 const topics=Array.from(document.querySelectorAll('.help-topic'));
 const original=topics.map(topic=>topic.open);
 const sections=Array.from(document.querySelectorAll('.faq-section'));
 const filter=()=>{
  const query=input.value.trim().toLocaleLowerCase();let count=0;
  topics.forEach((topic,index)=>{const visible=!query||topic.textContent.toLocaleLowerCase().includes(query);topic.hidden=!visible;topic.open=query?visible:original[index];if(visible)count++;});
  sections.forEach(section=>{section.hidden=!Array.from(section.querySelectorAll('.help-topic')).some(topic=>!topic.hidden);});
  status.textContent=query?`${count} ${count===1?'answer':'answers'} found`:`${topics.length} help topics`;empty.hidden=count>0;
 };
 input.addEventListener('input',filter);
 document.querySelectorAll('.quick-help a').forEach(link=>link.addEventListener('click',()=>{input.value='';filter();}));
}
