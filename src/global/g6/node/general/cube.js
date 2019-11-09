/**
 * Created by OXOYO on 2019/9/5.
 *
 * 立方体
 */

import Global from '@antv/g6/src/global'
import Util from '@antv/g6/src/util'
import base from '../base'

export default {
  name: 'cube',
  extendName: 'single-shape',
  options: {
    ...base,
    shapeType: 'path',
    getShapeStyle (cfg) {
      const size = this.getSize(cfg)
      const width = size[0]
      const height = size[1]
      const x = 0 - width / 2
      const y = 0 - height / 2
      const path = [
        // 左上
        [ 'M', -width / 2, -height / 2 ],
        // 右上
        [ 'L', width * 3 / 8, -height / 2 ],
        // 右上拐
        [ 'L', width / 2, -height * 3 / 8 ],
        // 右下
        [ 'L', width / 2, height / 2 ],
        // 左下
        [ 'L', -width * 3 / 8, height / 2 ],
        // 左下拐
        [ 'L', -width / 2, height * 3 / 8 ],
        // 左上
        [ 'L', -width / 2, -height / 2 ],
        // 右上
        [ 'L', width * 3 / 8, -height / 2 ],
        // 右上拐
        [ 'L', width / 2, -height * 3 / 8 ],
        // 横线
        [ 'L', width / 2, -height * 3 / 8 ],
        [ 'L', -width * 3 / 8, -height * 3 / 8 ],
        // 竖线
        [ 'L', -width * 3 / 8, height / 2 ],
        // 左下拐
        [ 'L', -width / 2, height * 3 / 8 ],
        // 左上
        [ 'L', -width / 2, -height / 2 ],
        // 斜线
        [ 'L', -width * 3 / 8, -height * 3 / 8 ]
      ]
      const color = cfg.color || Global.defaultNode.color
      const style = Util.mix({}, Global.defaultNode.style, {
        // 节点的位置在上层确定，所以这里仅使用相对位置即可
        x,
        y,
        width,
        height,
        path,
        stroke: color
      }, cfg.style)
      return style
    }
  }
}
