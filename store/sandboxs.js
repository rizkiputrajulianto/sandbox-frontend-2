export const state = () => {
    return {listWork : [], progress : []}
}

export const actions = {
    setWork({commit}, listWork){
        commit("ngesetWork", listWork)
    },
    setProgress({commit}, progress){
        commit("ngesetProgress", progress);
    },
    delGlobal({commit}, list){
        commit("deleteGlobal", list);
    },
    checkProgress({commit}, list){
        commit("checkoutWork", list);
    }
}

export const mutations = {
    ngesetWork(state, list){
        state.listWork.push(list);
    },
    ngesetProgress(state, data){
        state.progress.push(data);
        state.listWork.filter((itemss) => itemss != data)
    },
    deleteGlobal(state, del){
        state.listWork.filter((item) => item != del);
        // state.progress.filter((items) => items != del);
    },
    checkoutWork(state, dels){
        state.progress.filter((item) => item != dels);
        state.listWork.push(dels)
    }
}