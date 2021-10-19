window.onload = () => {

  // Make sticky header consume space
  const headerResizeObserver = new ResizeObserver(entries => 
    document.querySelector("#header-bottom").style.paddingTop = entries[0].target.clientHeight + "px"
  );

  headerResizeObserver.observe(document.querySelector("#header"));

} // window.onload


