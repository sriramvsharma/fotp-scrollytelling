$(document).ready(function(){
    $("#occasion").click(function(){
        $(".button:first").addClass("is-active");
        $(".button:nth-child(2)").removeClass("is-active");
        $(".button:last").removeClass("is-active");

        $(".occasion").removeClass("hide");
        $(".relationship").addClass("hide");
        $(".gender").addClass("hide");

    });

    $("#relationship").click(function(){
        $(".button:nth-child(2)").addClass("is-active");
        $(".button:first").removeClass("is-active");
        $(".button:last").removeClass("is-active");

        $(".relationship").removeClass("hide");
        $(".occasion").addClass("hide");
        $(".gender").addClass("hide");
    });

    $("#gender").click(function(){
        $(".button:last").addClass("is-active");
        $(".button:first").removeClass("is-active");
        $(".button:nth-child(2)").removeClass("is-active");

        $(".gender").removeClass("hide");
        $(".occasion").addClass("hide");
        $(".relationship").addClass("hide");

    });
});

var scroll = scroller()
    .container(d3.select('#graphic'));
  scroll(d3.selectAll('.step'));
  scroll.update(update);


//
// for(i=0; i < buttonList.length; i++) {
//   graphList[i].style.display = "block"
// }
//
// document.getElementsByTagName("td")[i].addEventListener("click", selection);
//
// function selection() {
//
//
// }





// using d3 for convenience
// var container = d3.select('#scroll');
// var graphic = container.select('.scroll__graphic');
// var chart = graphic.select('.chart');
// var text = container.select('.scroll__text');
// var step = text.selectAll('.step');
//
// // initialize the scrollama
// var scroller = scrollama();
//
// // generic window resize listener event
// function handleResize() {
//     // 1. update height of step elements
//     var stepHeight = Math.floor(window.innerHeight * 0.75);
//     step.style('height', stepHeight + 'px');
//     // 2. update width/height of graphic element
//     var bodyWidth = d3.select('body').node().offsetWidth;
//     graphic
//         // .style('width', bodyWidth + 'px')
//         .style('height', window.innerHeight + 'px');
//     var chartMargin = 32;
//     var textWidth = text.node().offsetWidth;
//
//     var chartWidth = graphic.node().offsetWidth - textWidth - chartMargin;
//     chart
//         // .style('width', chartWidth + 'px')
//         .style('height', Math.floor(window.innerHeight / 2) + 'px');
//     // 3. tell scrollama to update new element dimensions
//     scroller.resize();
// }
// // scrollama event handlers
// function handleStepEnter(response) {
//     // response = { element, direction, index }
//     // add color to current step only
//     step.classed('is-active', function (d, i) {
//         return i === response.index;
//     })
//     // update graphic based on step
//     chart.select('.graph' + 'i')
//     // .text(response.index + 1)
// }
//
// function handleContainerEnter(response) {
//     // response = { direction }
//     // sticky the graphic (old school)
//     graphic.classed('is-fixed', true);
//     graphic.classed('is-bottom', false);
// }
// function handleContainerExit(response) {
//     // response = { direction }
//     // un-sticky the graphic, and pin to top/bottom of container
//     graphic.classed('is-fixed', false);
//     graphic.classed('is-bottom', response.direction === 'down');
// }
// function init() {
//     // 1. force a resize on load to ensure proper dimensions are sent to scrollama
//     handleResize();
//     // 2. setup the scroller passing options
//     // this will also initialize trigger observations
//     // 3. bind scrollama event handlers (this can be chained like below)
//     scroller.setup({
//         container: '#scroll',
//         graphic: '.scroll__graphic',
//         text: '.scroll__text',
//         step: '.scroll__text .step',
// //        offset: 1, // set the trigger to be 1/2 way down screen
//         debug: true,
//     })
//         .onStepEnter(handleStepEnter)
//         .onContainerEnter(handleContainerEnter)
//         .onContainerExit(handleContainerExit);
//     // setup resize event
//     window.addEventListener('resize', handleResize);
// }
// // kick things off
// init();
