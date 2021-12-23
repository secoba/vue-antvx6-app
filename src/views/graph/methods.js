export const ports = {
  groups: {
    // 输入链接桩群组定义
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 6,
          magnet: true,
          stroke: '#008d34',
          strokeWidth: 1,
          fill: '#4dc377'
        }
      }
    },
    // 输出链接桩群组定义
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 6,
          magnet: true,
          stroke: '#008d34',
          strokeWidth: 1,
          fill: '#4dc377'
        }
      }
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 6,
          magnet: true,
          stroke: '#008d34',
          strokeWidth: 1,
          fill: '#4dc377'
        }
      }
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 6,
          magnet: true,
          stroke: '#008d34',
          strokeWidth: 1,
          fill: '#4dc377'
        }
      }
    }
  },
  items: [
    {
      id: 'port1',
      group: 'top'
    },
    {
      id: 'port2',
      group: 'bottom'
    },
    {
      id: 'port3',
      group: 'left'
    },
    {
      id: 'port4',
      group: 'right'
    }
  ]
}