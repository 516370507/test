import { Random } from 'mockjs'

const code = 200

export default {
  getTableData () {
    let data = []
    Array.apply(null, { length: 10 }).forEach(_ => {
      data.push({
        name: Random.cname(),
        title: Random.csentence(8, 16),
        date: Random.date()
      })
    })
    return {
      code,
      data
    }
  }
}
