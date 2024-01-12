import React from "react";
import '../../theme/theme.css';

function Supplier() {
  return (
    <div className="container">
		<div className="row justify-content-center">
			<div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
				<h4 className="head4 text-center" 
					style={{ color: 'var(--color-primary-light)', marginTop: '24px'}}>
					Nhà Cung Ứng Của Pop4u
				</h4>
			</div>
		</div>
		<div className="row justify-content-center">
			<div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
				<hr></hr>
				<p className="body-small" style={{marginBottom: '32px'}}>
					Pop4u tự hào về sự hợp tác mạnh mẽ với nhiều công ty giải trí hàng đầu tại đất nước xinh đẹp
					Hàn Quốc. Với tầm nhìn sáng tạo và cam kết không ngừng nâng cao chất lượng, Pop4u đã chứng minh
					được tầm quan trọng của mình trong việc làm nổi bật nguồn cung ứng giải trí đa dạng và độc đáo. Đặc biệt, với vai trò là nhà phân phối vàng, Pop4u không chỉ đơn thuần là đối tác kinh doanh mà còn là người đồng hành đáng tin cậy, góp phần quan trọng vào sự phát triển bền vững của ngành công nghiệp giải trí.
				</p>
				<p className="body-small" style={{marginBottom: '32px'}}>Dưới đây là một số nhà cung ứng nổi bật của Pop4u.</p>
				<div className="artist-card animate__animated animate__slideInRight">
					<div className="artist-pic">
						<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEUAAAD///9hYWGurq5eXl5GRkZaWlqioqKDg4OBgYHExMTIyMijo6OHh4eKiopnZ2dtbW0YGBg+Pj75+fm2trZ7e3uRkZFPT089KiJLAAACaUlEQVR4nO3b207bQBRG4aRACVDKGd7/TelIpHFsZ2aPZ58u1nft2l36zViVym4HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANGefgk8v9Ru8Sq6R9WTYeFe4qp2h2vRLRqCC29rN/itERhcWA1UWTC48E/tj+ssGFvoEhhZWA1UekVDC50C4wq9AsMK3QKjCj0+E6GFDh/62ELHBWMKPRcMKfQNDCh0fUUjCr0D3QvdA70L/QOdCwMCfQs1TtG326su756FOgveG/6VO1ksmCvRKHC/f/AqaOkI7DxksqxoFphmRbvALCsaBiZJtAzM8aLKAjf/cynBipYL5lhRYcH3zhVvVpj1HQtHAg+7u74V1y6yC9y1Axuv6OHfJfXE+YoBhaOBrcTZiv6FI4F3P5d9VK86X9G9cCTw8f+FB3mid6HGgoX8RXUurP4nhOYpOiVe0bmwpmPBQrpinsKuBQvhimkKuwNbiccVsxSKvoNzosQkhZsCZYk5CjsPmRPBcZOiUPyhX3psJmYo3Lxg0XxRExRuOEWnWivGFw4tWDS+i+GFgwsW9RWjCxUCNyQaR01t/A7O9SaaNp1RCuxONEw6N3zInPQlmhXNDHzol/4mLFRcsOhZ0aRnQeUUnepY0SBnSXnBQr6ies0K9QUL8YrKMWtMAuWJqi2r1L6Dc8JExZR1ZoHSRLWSCwwOmRNRolLIJaof+qXP8ELTBQvBigoZlxmdolPtRIWHXGS+YNFMVHnKuuf6k0d/Bo9aP4tKj1lT/x3eL7XnfIX9HjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyHwDTFke1S7lcLAAAAAASUVORK5CYII=' alt="" />
					</div>
					<div className="artist-name">
						<a href="https://www.ygfamily.com/en/main" target="blank">
							<span className="label-xxl">YG Entertainment</span>
						</a>
					</div>
					<div className="text-center" style={{marginTop: '16px'}}>
						<span className="body-small">
							YG Entertainment là một công ty giải trí đa quốc gia của Hàn Quốc, được thành lập vào ngày 12 tháng 4 năm 1998 bởi Yang Hyun-suk. 
							YG Entertainment được biết đến với việc quản lý các nghệ sĩ K-pop nổi tiếng như BIGBANG, BLACKPINK, WINNER, iKON, 
							TREASURE,...
						</span>
					</div>
				</div>
				<div className="artist-card animate__animated animate__slideInRight">
					<div className="artist-pic">
						<img src='https://mir-s3-cdn-cf.behance.net/projects/404/068e51124446673.Y3JvcCwxNDY1LDExNDYsMjc1LDA.png' alt="" />
					</div>
					<div className="artist-name">
						<a target="blank" href="https://hybecorp.com/eng/main">
							<span className="label-xxl">HYBE Corporation</span>
						</a>
					</div>
					<div className="text-center" style={{marginTop: '16px'}}>
						<span className="body-small">
							HYBE Corporation, trước đây được gọi là Big Hit Entertainment, là một công ty giải trí đa quốc gia của Hàn Quốc 
							được thành lập vào năm 2005 bởi Bang Si-hyuk. HYBE nổi tiếng với việc quản lý các nghệ sĩ K-pop thành 
							công như BTS, TXT, ENHYPEN, SEVENTEEN, LE SSERAFIM, NewJeans, và nhiều nghệ sĩ khác.
						</span>
					</div>
				</div>
				<div className="artist-card animate__animated animate__slideInRight">
					<div className="artist-pic">
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3Pxt1qhLVQCoTxTkZ8BVjzQtnaT5BKd6Ei8xoBCqSr4mDAbERMzApELgnq-7V0yTJUA&usqp=CAU' alt="" />
					</div>
					<div className="artist-name">
						<a target="blank" href="https://www.smentertainment.com/en/">
							<span className="label-xxl">SM Entertainment</span>
						</a>
					</div>
					<div className="text-center" style={{marginTop: '16px'}}>
						<span className="body-small">
							SM Entertainment là một công ty giải trí đa quốc gia của Hàn Quốc, được thành lập vào ngày 14 tháng 2 
							năm 1995 bởi Lee Soo-man. SM nổi tiếng với việc quản lý các nghệ sĩ K-pop thành công như EXO, 
							Red Velvet, aespa, NCT, Super Junior, Girls' Generation, SHINee, TVXQ, f(x), BoA, SuperM, WayV,...
						</span>
					</div>
				</div>
				<div className="artist-card animate__animated animate__slideInRight">
					<div className="artist-pic">
						<img src='data:image/png;base64,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' alt="" />
					</div>
					<div className="artist-name">
						<a href="https://www.jype.com/" target="blank">
							<span className="label-xxl">JYP Entertainment</span>
						</a>
					</div>
					<div className="text-center" style={{marginTop: '16px'}}>
						<span className="body-small">
							JYP Entertainment là một công ty giải trí đa quốc gia của Hàn Quốc, được thành lập 
							vào ngày 11 tháng 10 năm 1997 bởi Park Jin-young. JYP nổi tiếng với việc quản lý các nghệ sĩ 
							K-pop thành công như TWICE, ITZY, Stray Kids, Day6, NiziU, 2PM, GOT7, Wonder Girls, 
							Miss A, 2AM, Baek A Yeon, Sunmi, JJ Project, ...
						</span>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}
export {Supplier}