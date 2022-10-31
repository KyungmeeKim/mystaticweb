import axios from 'axios'

/* 'http://127.0.0.1:8090/' */
const instance = axios.create({
	proxy: 'https://kmwas2.azurewebsites.net',
})

instance.defaults.headers.post['Content-Type'] =
	'application/json;charset=utf-8'
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

/**
 * 게시글 목록 조회
 * @param {*} params
 */
function getBoardListAPI(params) {
	return instance.get('/api/board/list', params)
}

/**
 * 게시글 상세 조회
 * @param {*} params
 */
function getBoardDetailAPI(params) {
	return instance.get('/api/board/detail', params)
}

/**
 * 게시글 작성
 * @param {*} params
 */
function insertBoardAPI(params) {
	return instance.post('/api/board/insert', null, params)
}

/**
 * 게시글 수정
 * @param {*} params
 */
function updateBoardAPI(params) {
	return instance.post('/api/board/update', null, params)
}

/**
 * 게시글 삭제
 * @param {*} params
 */
function deleteBoardAPI(params) {
	return instance.post('/api/board/delete', null, params)
}

/**
 * 댓글 작성
 * @param {*} params
 */
function insertReplyAPI(params) {
	return instance.post('/api/board/reply/insert', null, params)
}

/**
 * 댓글 조회
 * @param {*} params
 */
function getReplyListAPI(params) {
	return instance.get('/api/board/reply/list', params)
}

/**
 * 댓글 수정
 * @param {*} params
 */
function updateReplyAPI(params) {
	return instance.post('/api/board/reply/update', null, params)
}

/**
 * 댓글 삭제
 * @param {*} params
 */
function deleteReplyAPI(params) {
	return instance.post('/api/board/reply/delete', null, params)
}

export {
	getBoardListAPI,
	getBoardDetailAPI,
	insertBoardAPI,
	updateBoardAPI,
	deleteBoardAPI,
	insertReplyAPI,
	getReplyListAPI,
	updateReplyAPI,
	deleteReplyAPI,
}
