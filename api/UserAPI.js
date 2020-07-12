// firebaseのインポート
import firebase from 'firebase'

export default class UserAPI {

    /**
     * メールアドレスとパスワードで新規ユーザー登録を実施します。
     * @param {string} mailAddress
     * @param {string} password
     */
    static regist(mailAddress, password,userName) {
         return firebase.auth().createUserWithEmailAndPassword(mailAddress, password)
        .then(function(result) {
           result.user.updateProfile({
            displayName: userName
          })
        }).catch(function(error) {
          console.log(error);
        });
    }

    /**
     * メールアドレスとパスワードでログインを実施します。
     * @param {string} mailAddress
     * @param {string} password
     */
    static login(mailAddress, password) {
        return firebase.auth().signInWithEmailAndPassword(mailAddress, password);
    }

    /**
     * ログアウトします。
     */
    static logout(){
        return firebase.auth().signOut();
    }

    /**
     * ユーザー情報を取得します。
     */
    static getUser(){
        return firebase.auth().currentUser;
    }

    /**
     * ユーザー情報を取得します。
     */
    static authStateCheck(){
        return firebase.auth().onAuthStateChanged();
    }
}
