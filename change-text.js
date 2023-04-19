const textArr = [
  ["Landing template for startups", "Startup Landing Page Template"],
  ["Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.", "Create Stunning Landing Pages Once and For All - Our Template is Fully Responsive Across All Devices!"],
  ["Start free trial", "Free Trial - Start Now!"],
  ["The majority our customers do not understand their workflows.", "Unlock the Power of Efficient Workflows - Let Us Help You Simplify Your Processes and Maximize Productivity!"]
];

const observer = new MutationObserver(() => {
  const html = document.body.innerHTML;
  textArr.forEach(item => {
    const [oldText, newText] = item;
    if (html.includes(oldText)) {
      document.body.innerHTML = html.replace(new RegExp(oldText, "g"), newText);
    }
  })
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false
});

window.addEventListener('load', () => observer.disconnect());
