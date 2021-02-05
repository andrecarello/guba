import { CLUSTERS } from '../config/Settings';

/**
* Verifica se o usuário tem acesso a oferta
*
* @param offerCluster
* @returns {boolean}
*/
export const offerPermission = (offerCluster) => {
	const { cluster } = _.model('auth');
	return cluster >= parseInt(offerCluster)
};

/**
* Verifica se o usuário é CONTROLE ou EXCLUSIVO
 *
 * @returns {boolean}
 */
export const isClient = () => {
	const cluster = _.model('auth').cluster;
	return cluster >= CLUSTERS.controle;
};

export const isClientExclusive = () => {
	const cluster = _.model('auth').cluster;
	return cluster >= CLUSTERS.exclusivo;
};

/**
 * Verifica se é dia 1, 2 ou 3 do mês para aparecer o banner do Cupom Amigo
 * @returns {boolean}
 */
export const friendCouponDay = () => {
	return true;
	const todayDate = new Date();
	if (document.location.origin.includes('.test') || document.location.origin.includes('stage.')) {
		return true;
	} else {
		return (todayDate.getDate() === 1 ||
			todayDate.getDate() === 2 ||
			todayDate.getDate() === 3);
	}
}

/**
 * Verifica o dia para aparecer o banner do Giftcard
 * @returns {boolean}
 */
export const giftcardDay = () => {
	const todayDate = new Date();
	if (window.location.href.includes('stage') || window.location.href.includes('localhost')) {

		return true;
	}

	return (
		todayDate.getDate() === 9
		|| todayDate.getDate() === 10
		|| todayDate.getDate() === 11
		|| todayDate.getDate() === 12
	) && todayDate.getMonth() === 11;

}

/**
 * 
 * Conta 15 dias para aparecer o banner de resgate de gift
 * @returns {boolean}
 */
export const migrationGiftcardDays = () => {
	const { activationDate } = _.findModel('UserModel');
	var limitDate = new Date(activationDate);
	limitDate.setDate(limitDate.getDate() + 15);
	return Date.now() <= limitDate;
}