// SIDEBAR TOGGLE
let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
    
    // Adiciona overlay simples
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
    `;
    overlay.onclick = closeSidebar;
    document.body.appendChild(overlay);
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
    
    // Remove overlay
    const overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
      overlay.remove();
    }
  }
}

// MENU INTERACTIONS
document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.sidebar-list-item');
  
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ANIMATE NUMBERS
  animateNumbers();
});

// ANIMATE NUMBERS
function animateNumbers() {
  const numbers = document.querySelectorAll('.card-number');
  
  numbers.forEach(number => {
    const target = parseInt(number.textContent.replace(/,/g, ''));
    const duration = 1500;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      number.textContent = Math.floor(current).toLocaleString();
    }, 16);
  });
}

// SEARCH FUNCTIONALITY
const searchInput = document.querySelector('.search-input');
if (searchInput) {
  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Buscando por:', searchTerm);
  });
}

// ---------- CHARTS ----------

// BAR CHART - Simplificado
const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
      name: 'Produtos',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: '#475569',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    show: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Laptop', 'Smartphone', 'Monitor', 'Headphones', 'Câmera'],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#f1f5f9',
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#f1f5f9',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART - Simplificado
const areaChartOptions = {
  series: [
    {
      name: 'Pedidos de Compra',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Pedidos de Venda',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#6366f1', '#f59e0b'],
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  grid: {
    borderColor: '#475569',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f1f5f9',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 4,
    strokeWidth: 2,
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#f1f5f9',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#f1f5f9',
      },
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  }
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

console.log('✨ Dashboard simplificado carregado!');
