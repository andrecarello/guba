import { CLUSTERS } from '../config/Settings';

/**
* Verifica se o usuário tem acesso a oferta
*
* @param offerCluster
* @returns {boolean}
*/
export const offerPermission = (offerCluster) => {
	const { cluster } = _.model('user');

	if (cluster === CLUSTERS.exclusivo || cluster >= parseInt(offerCluster)) return true;

	return false;
};
