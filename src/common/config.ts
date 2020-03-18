/**
 * 项目生产环境配置文件
 */

export default {
  API_BASE_URL: process.env.NODE_ENV === 'production' ? '' : '',
  API: {
  }
}
