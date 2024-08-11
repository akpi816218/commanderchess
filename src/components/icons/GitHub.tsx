import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export default function GitHubIcon({ size }: { size?: SizeProp }) {
	return <FontAwesomeIcon icon={faGithub} size={size} />;
}
