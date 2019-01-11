import axios from 'axios'
import moment from 'moment'
import crypto from 'crypto'
import tool from '../utils/tool'

const version = '/v1'
const baseUrl = 'https://scan.iotchain.io' + version
const signKey = "Ub1kjkh^800123^&xc%1jjz$89$&0jkz01B+abb"
const respJson = tool.respJson;

const GET_METHOD = 'get'
const POST_METHOD = 'POST'

//订阅请求
const subscribe = async (mailAddr) => {
    try {
        var respObject = await axios({
            method: 'post',
            url: 'https://api.iotchain.io/subscribe',
            data: { mailAddr: mailAddr }
        })
        if (respObject.status === 200 && respObject.data.code === 200) {
            return respJson(true, respObject.data.data, respObject.data.msg)
        } else {
            return respJson(false, respObject.data.data, respObject.data.msg)
        }
    } catch (err) {
        return respJson(false, err, err.message)
    }
}

//参数生成
const sign = (time) => {
    return crypto.createHash("md5").update(signKey + time).digest("hex");
}

//参数 page size 额外身份信息
const generateParams = (...args) => {
    var time = moment().valueOf();
    var param = {
        time: time,
        sign: sign(time),
        mailAddress: (typeof args[0] == undefined ? 0 : args[0]),
        address: (typeof args[1] == undefined ? 10 : args[1])
    }
    if (args[2] !== undefined) {
        return { ...param, ...args[2] }
    } else {
        return param
    }
}

//基础请求
const baseRequest = async (method, path, params) => {
    try {
        var key = method === GET_METHOD ? 'parmas' : 'data'
        var respObject = await axios({
            method: method,
            url: baseUrl + path,
            [key]: params,
        })
        if (respObject.status === 200 && respObject.data.code === 200) {
            return respJson(true, respObject.data.data, respObject.data.msg)
        } else {
            return respJson(false, respObject.data.data, respObject.data.msg)
        }
    } catch (err) {
        return respJson(false, err, err.message)
    }
}

//请求最新的块
const requestApplyITC = async (mailAddress, address, name) => {
    var resp = await baseRequest(POST_METHOD, '/application/new', generateParams(mailAddress, address, name))
    return resp
}



const httpManager = {
    requestApplyITC,
    subscribe
}

export default httpManager

