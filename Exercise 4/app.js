new Vue({
  el: '#exercise',
  data: {
    effect: 'highlight'
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){      
        document.getElementById('effect').classList.remove(vm.effect);  
        vm.effect = (vm.effect == 'shrink') ? 'highlight' : 'shrink';
        document.getElementById('effect').classList.add(vm.effect);
      }, 1000);
    }
  }
});
