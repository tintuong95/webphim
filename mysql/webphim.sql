-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2022 at 08:14 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webphim`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(3, 'Warner Bros.', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Universal Pictures', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Columbia Pictures', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Walt Disney Pictures', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Marvel Studios', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Paramount Pictures', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, '20th Century Fox', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'RatPac-Dune Entertainmen', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Legendary Entertainmen', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Relativity Media', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, '1', '2022-06-12 06:00:50', '2022-06-12 06:00:50'),
(17, '1', '2022-06-12 06:10:17', '2022-06-12 06:10:17');

-- --------------------------------------------------------

--
-- Table structure for table `categorys`
--

CREATE TABLE `categorys` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Thriller', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Fantasy', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Action', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Romance', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Anime', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Horor', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Sci-Fi', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, '1', '2022-06-12 06:00:40', '2022-06-12 06:00:40');

-- --------------------------------------------------------

--
-- Table structure for table `films`
--

CREATE TABLE `films` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `categoryId` int(10) UNSIGNED DEFAULT NULL,
  `description` text NOT NULL,
  `publicYear` int(11) NOT NULL,
  `authorId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `films`
--

INSERT INTO `films` (`id`, `name`, `categoryId`, `description`, `publicYear`, `authorId`, `createdAt`, `updatedAt`, `img`, `link`) VALUES
(22, 'MỒI CÁ MẬP', 3, 'Mồi Cá Mập - Shark Bait câu chuyện kể về một nhóm bạn thân quyết định chuyến đi nghỉ dưỡng cuối tuần ở Mexico. Sau khi bọn họ cùng nhau trải qua một bữa tiệc trên biển, họ đã nảy ra ý định trộm chiếc moto nước để tiếp tục cuộc vui chơi của mình. Thế nhưng, từ cuộc vui trở thành thảm họa, khi bọn họ đang di chuyển trên Moto nước thì bị một đàn cá mập tấn công. Liệu bọn họ có thể sống sót và thoát ra khỏi tử thần?', 2022, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/Vsfjihx.jpg', '//ok.ru/videoembed/3232540658347'),
(23, 'PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN', 4, 'Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn - Doctor Strange in the Multiverse of Madness bộ phim lấy bối cảnh diễn ra sau khi kết thúc cuộc chiến khốc liêt với Thanos trong phần phim EndGame. Lúc này Doctor Strange một cựu bác sĩ phẩu thật với sức mạnh của mình, đã giành ra thời gian để nghiên cứu và điều khiển về các viên đá thời gian. Tuy nhiên, nó lại mở ra một cánh cửa liên kết đến đa vũ trụ. Để có thể khôi phục mọi thứ trở về như trước kia, Doctor Strange đã tìm đến sự trợ giúp của các người bạn của mình là Wong, Sorcerer và Scarlet Witch để ngăn chặn mọi việc trước khi trở nên quá muộn.', 2015, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/LIB2IDL.png', '//ok.ru/videoembed/3232540658347'),
(24, 'SINH VẬT HUYỀN BÍ 3', 7, 'Sinh Vật Huyền Bí 3: Những Bí Mật Của Dumbledore – Fantastic Beasts: The Secrets of Dumbledore lấy bối cảnh vào thời kỳ thế chiến thứ hai diễn ra tại Brazil và Đức, điều này đã khiến cho thế giới pháp Thuật bị thiệt hại. Không những vậy thế lực bóng đêm Grindelwald bất ngờ trổi dậy đầy mạnh mẽ. Vì thế Albus Dumbledore đã giao nhiệm vụ cho Newt Scamander và những người khác chuẩn bị cho một cuộc chiến với đội quân Grindelwald, tuy nhiên cuộc chiến lại gây ra nhiều hậu quả thiệt hại đầy nặng nề.', 2016, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/y6EGjmp.jpg', '//ok.ru/videoembed/3232540658347'),
(25, 'DỊ NHÂN THẾ HỆ MỚI', 5, 'Dị Nhân Thế Hệ Mới - The New Mutants kể về năm thanh thiếu niên đã bị một thế lực bí ẩn bắt giam giữ tại một căn nhà bí mật. Tại đây, cả nhóm đã phát hiện ra được bản thân đã có một sức mạnh đặc biệt, nhưng không thể kiểm soát được chúng. Cả nhóm còn phải tìm mọi cách để có thể thoát được nơi này và còn đối mặt với những quá khứ đầy đen tối.', 2022, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/LlIBsfv.jpg', '//ok.ru/videoembed/3232540658347'),
(26, 'CHUYẾN PHIÊU LƯU CỦA PIL', 5, 'Chuyến Phiêu Lưu Của Pil - Pils Adventures xoay quanh câu chuyện về cô nàng Pil một đứa trẻ mồ côi, đang sinh sống lang thang trên khắp con phố nhộn nhiệm Roc-En-Brume. Hiện cô đang sinh sống cùng với ba con chồn thông minh được cô huấn luyện đặc biệt, chúng cùng với cô đột nhập và trộm đi thức ăn từ lâu đài để sống sót qua ngày. Chuyến Phiêu Lưu Của Pil - Pils Adventures vì thế Pil đã bị Tristain một kẻ độc ác chiếm đoạt ngai vàng và dùng quyền lực của mình để truy bắt Pil. Để có thể thoát khỏi sự truy đuổi của những tên lính, Pil đã mặc đồ công chúa và bắt đầu nhiệm vụ giải cứu Roland một người kế thừa ngai vàng thực sự, anh ta đã bị dính ma thuật biến thành nửa mèo nửa gà. Giờ đây, Pil cùng với những người bạn của mình bắt đầu chuyến phiêu lưu gây náo loạn cả vương quốc hùng mạnh.', 2020, 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/qH110Sh.png', '//ok.ru/videoembed/3232540658347'),
(27, 'SÁT THỦ NHÂN TẠO PHẦN 2', 6, 'Sát Thủ Nhân Tạo Phần 2 - The Witch: Part 2 The Other One bộ phim thuộc thể loại hành động, viễn tưởng và từng gây sốt khắp màn ảnh rộng mới sự diễn xuất đặc biệt của cô nàng diễn viên Kim Da Mi. Tuy nhiên, ở phần hai này cô nàng Kim Da Mi chỉ xuất hiện với vài trò Cameo và có thêm một dàn diễn viên mới đầy nổi tiếng như lee Jong Suk, Park Eun Bi, Jo Min Soo,... Nội dung phim Sát Thủ Nhân Tạo Phần 2 - The Witch: Part 2 The Other One bắt đầu từ việc một cô gái tỉnh dậy tại một căn phòng thí nghiệm khổng lồ và cố gắng tìm cách trốn thoát khỏi nơi đó. Cô ấy đã tình cờ gặp gỡ được Kyung Hee đang nỗ lực bảo vệ ngôi nhà của mình thoát khỏi sự tấn công của tội phạm khét tiếng. Nhưng với sức mạnh đặc biệt của bản thân mình, cô gái đã thành công đánh bại cả tổ chức và bảo vệ thành công được nhà của Kyung Hee. Nhưng cô còn phải tìm cách thoát khỏi sự truy đuổi của những người tại phòng thí nghiệm. Liệu danh tính thực sự của cô gái đó là gì? Tại sao ai cũng đều muốn truy bắt cô?', 2009, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/BhyNWWk.png', '//ok.ru/videoembed/3232540658347'),
(28, 'SỰ TRỖI DẬY CỦA GRU', 7, 'Minions: Sự Trỗi Dậy Của Gru - Minions: The Rise of Gru bộ phim hoạt hình đình đám đánh dấu sự quay trở lại và lợi hại hơn xưa của những chú Minions hài hước. Bộ phim có thời lượng 90 phút do đạo diễn Kyle Balda chỉ đạo và sẽ phát hành tại rạp vào tháng 7 năm 2022. Nội dung phim Minions: Sự Trỗi Dậy Của Gru - Minions: The Rise of Gru sẽ tập trung vào anh chàng Gru một nhà khoa học điên, anh là một Fanboy chính hiểu bởi nhóm ác nhân Vicious 6. Vì quá hâm mộ thần tượng của mình nên anh đã ấp ủ kế hoạch khiến bản thân trở nên độc ác để gia nhập vào nhóm của họ. Vì để nhiệm vụ thành công, anh đã nhận được sự trợ giúp của những chú minions và làm cho cuộc phiêu lưu này trở nên vui nhộn.', 2007, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/VtJPC2T.png', '//ok.ru/videoembed/3232540658347'),
(29, 'HỢ SĂN QUÁI VẬT', 5, 'Thợ Săn Quái Vật - Monster Hunters là bộ phim thuộc thể loại phiêu lưu, viễn tưởng, hành động có thời lượng 99 phút của đạo diễn Paul W.S. Anderson chỉ đạo và sự góp mặt của các diễn viên Tony Jaa, Diego Boneta, T.I., Josh Helman, Milla Jovovich, Meagan Good, Jin Au-Yeung, Ron Perlman... nội dung kể về cô nàng Artemis là đội trưởng của biệt đội săn quái vật, cô cùng với đồng đội của mình đã đi đến một thế giới đầy bí ẩn. Tại đây, bọn họ phải đối mặt và chiến đấu với lũ quái vật khổng lồ, và tìm cách có thể quay trở về thế giới thực, tại đây bọn họ còn gỡ được anh chàng thợ săn khác và cùng đồng hành trong thế giới này.', 2007, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/awWhFDn.jpg', '//ok.ru/videoembed/3232540658347'),
(30, 'THÀNH PHỐ MẤT TÍCH', 7, 'Thành Phố Mất Tích - The Lost City kể về Loretta Sage một vị tác giả đầy tài năng, nhưng cô lại yêu thích một cuộc sống yên tĩnh và dành cả đời mình để phiêu lưu khắp các địa điểm kỳ lạ nhằm viết sách. Cô còn có người mẫu ảnh thân thiết là Alan. Trong quá trình cả hai quảng bá một cuốn sách mới sắp ra mắt, Loretta Sage bất ngờ bị vị tỉ phú đầy lập dị bắt đi, nhưng cô lại hi vọng chính anh ta có thể dẫn mình đến một thành phố chứa kho báu cổ đại đã biến mất từ lâu. Lúc này Alan đã dũng cảm lên đường giải cứu cô và cả hai cuốn vào một cuộc phiêu lưu trong rừng sâu để tìm kiếm cổ vật.', 2020, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/nYprSo2.jpg', '//ok.ru/videoembed/3232540658347'),
(31, 'NHỮNG KẺ XẤU XA', 4, 'Những Kẻ Xấu Xa - The Bad Guys câu chuyện kể về một băng nhóm động vật sinh sống ngoài vòng pháp luật, gồm có chú chó Sói xấu xa làm đầu xỏ, đệ tử của anh gồm có một cô Nhện, anh cá Mập, Cá Hổ và anh chàng Rắn. Cả năm người đệ tử này trong quá khứ đều là những tên tội phạm khét tiếng, chuyên trộm cướp trong thành phố. Giờ đây, cả nhóm phải thực hiện một tử thách hoàn toàn mới mẻ trong cuộc đời của mình, chính là phải từ bỏ làm việc ác, cải tạo quy chính trở thành những con ngời lương thiện. Liệu nhiệm vụ của họ có thể thành công?', 2020, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/UgVDM2K.png', '//ok.ru/videoembed/3232540658347'),
(33, 'PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN', 3, 'Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn - Doctor Strange in the Multiverse of Madness bộ phim lấy bối cảnh diễn ra sau khi kết thúc cuộc chiến khốc liêt với Thanos trong phần phim EndGame. Lúc này Doctor Strange một cựu bác sĩ phẩu thật với sức mạnh của mình, đã giành ra thời gian để nghiên cứu và điều khiển về các viên đá thời gian. Tuy nhiên, nó lại mở ra một cánh cửa liên kết đến đa vũ trụ. Để có thể khôi phục mọi thứ trở về như trước kia, Doctor Strange đã tìm đến sự trợ giúp của các người bạn của mình là Wong, Sorcerer và Scarlet Witch để ngăn chặn mọi việc trước khi trở nên quá muộn.', 2021, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/LIB2IDL.png', '//ok.ru/videoembed/3232540658347'),
(34, 'SINH VẬT HUYỀN BÍ 3', 3, 'Sinh Vật Huyền Bí 3: Những Bí Mật Của Dumbledore – Fantastic Beasts: The Secrets of Dumbledore lấy bối cảnh vào thời kỳ thế chiến thứ hai diễn ra tại Brazil và Đức, điều này đã khiến cho thế giới pháp Thuật bị thiệt hại. Không những vậy thế lực bóng đêm Grindelwald bất ngờ trổi dậy đầy mạnh mẽ. Vì thế Albus Dumbledore đã giao nhiệm vụ cho Newt Scamander và những người khác chuẩn bị cho một cuộc chiến với đội quân Grindelwald, tuy nhiên cuộc chiến lại gây ra nhiều hậu quả thiệt hại đầy nặng nề.', 2021, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/y6EGjmp.jpg', '//ok.ru/videoembed/3232540658347'),
(35, 'DỊ NHÂN THẾ HỆ MỚI', 3, 'Dị Nhân Thế Hệ Mới - The New Mutants kể về năm thanh thiếu niên đã bị một thế lực bí ẩn bắt giam giữ tại một căn nhà bí mật. Tại đây, cả nhóm đã phát hiện ra được bản thân đã có một sức mạnh đặc biệt, nhưng không thể kiểm soát được chúng. Cả nhóm còn phải tìm mọi cách để có thể thoát được nơi này và còn đối mặt với những quá khứ đầy đen tối.', 2020, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/LlIBsfv.jpg', '//ok.ru/videoembed/3232540658347'),
(36, 'CHUYẾN PHIÊU LƯU CỦA PIL', 3, 'Chuyến Phiêu Lưu Của Pil - Pils Adventures xoay quanh câu chuyện về cô nàng Pil một đứa trẻ mồ côi, đang sinh sống lang thang trên khắp con phố nhộn nhiệm Roc-En-Brume. Hiện cô đang sinh sống cùng với ba con chồn thông minh được cô huấn luyện đặc biệt, chúng cùng với cô đột nhập và trộm đi thức ăn từ lâu đài để sống sót qua ngày. Chuyến Phiêu Lưu Của Pil - Pils Adventures vì thế Pil đã bị Tristain một kẻ độc ác chiếm đoạt ngai vàng và dùng quyền lực của mình để truy bắt Pil. Để có thể thoát khỏi sự truy đuổi của những tên lính, Pil đã mặc đồ công chúa và bắt đầu nhiệm vụ giải cứu Roland một người kế thừa ngai vàng thực sự, anh ta đã bị dính ma thuật biến thành nửa mèo nửa gà. Giờ đây, Pil cùng với những người bạn của mình bắt đầu chuyến phiêu lưu gây náo loạn cả vương quốc hùng mạnh.', 2020, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/qH110Sh.png', '//ok.ru/videoembed/3232540658347'),
(37, 'SÁT THỦ NHÂN TẠO PHẦN 2', 3, 'Sát Thủ Nhân Tạo Phần 2 - The Witch: Part 2 The Other One bộ phim thuộc thể loại hành động, viễn tưởng và từng gây sốt khắp màn ảnh rộng mới sự diễn xuất đặc biệt của cô nàng diễn viên Kim Da Mi. Tuy nhiên, ở phần hai này cô nàng Kim Da Mi chỉ xuất hiện với vài trò Cameo và có thêm một dàn diễn viên mới đầy nổi tiếng như lee Jong Suk, Park Eun Bi, Jo Min Soo,... Nội dung phim Sát Thủ Nhân Tạo Phần 2 - The Witch: Part 2 The Other One bắt đầu từ việc một cô gái tỉnh dậy tại một căn phòng thí nghiệm khổng lồ và cố gắng tìm cách trốn thoát khỏi nơi đó. Cô ấy đã tình cờ gặp gỡ được Kyung Hee đang nỗ lực bảo vệ ngôi nhà của mình thoát khỏi sự tấn công của tội phạm khét tiếng. Nhưng với sức mạnh đặc biệt của bản thân mình, cô gái đã thành công đánh bại cả tổ chức và bảo vệ thành công được nhà của Kyung Hee. Nhưng cô còn phải tìm cách thoát khỏi sự truy đuổi của những người tại phòng thí nghiệm. Liệu danh tính thực sự của cô gái đó là gì? Tại sao ai cũng đều muốn truy bắt cô?', 2002, 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/BhyNWWk.png', '//ok.ru/videoembed/3232540658347'),
(38, 'SỰ TRỖI DẬY CỦA GRU', 3, 'Minions: Sự Trỗi Dậy Của Gru - Minions: The Rise of Gru bộ phim hoạt hình đình đám đánh dấu sự quay trở lại và lợi hại hơn xưa của những chú Minions hài hước. Bộ phim có thời lượng 90 phút do đạo diễn Kyle Balda chỉ đạo và sẽ phát hành tại rạp vào tháng 7 năm 2022. Nội dung phim Minions: Sự Trỗi Dậy Của Gru - Minions: The Rise of Gru sẽ tập trung vào anh chàng Gru một nhà khoa học điên, anh là một Fanboy chính hiểu bởi nhóm ác nhân Vicious 6. Vì quá hâm mộ thần tượng của mình nên anh đã ấp ủ kế hoạch khiến bản thân trở nên độc ác để gia nhập vào nhóm của họ. Vì để nhiệm vụ thành công, anh đã nhận được sự trợ giúp của những chú minions và làm cho cuộc phiêu lưu này trở nên vui nhộn.', 2014, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/VtJPC2T.png', '//ok.ru/videoembed/3232540658347'),
(39, 'HỢ SĂN QUÁI VẬT', 3, 'Thợ Săn Quái Vật - Monster Hunters là bộ phim thuộc thể loại phiêu lưu, viễn tưởng, hành động có thời lượng 99 phút của đạo diễn Paul W.S. Anderson chỉ đạo và sự góp mặt của các diễn viên Tony Jaa, Diego Boneta, T.I., Josh Helman, Milla Jovovich, Meagan Good, Jin Au-Yeung, Ron Perlman... nội dung kể về cô nàng Artemis là đội trưởng của biệt đội săn quái vật, cô cùng với đồng đội của mình đã đi đến một thế giới đầy bí ẩn. Tại đây, bọn họ phải đối mặt và chiến đấu với lũ quái vật khổng lồ, và tìm cách có thể quay trở về thế giới thực, tại đây bọn họ còn gỡ được anh chàng thợ săn khác và cùng đồng hành trong thế giới này.', 2015, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/awWhFDn.jpg', '//ok.ru/videoembed/3232540658347'),
(40, 'THÀNH PHỐ MẤT TÍCH', 3, 'Thành Phố Mất Tích - The Lost City kể về Loretta Sage một vị tác giả đầy tài năng, nhưng cô lại yêu thích một cuộc sống yên tĩnh và dành cả đời mình để phiêu lưu khắp các địa điểm kỳ lạ nhằm viết sách. Cô còn có người mẫu ảnh thân thiết là Alan. Trong quá trình cả hai quảng bá một cuốn sách mới sắp ra mắt, Loretta Sage bất ngờ bị vị tỉ phú đầy lập dị bắt đi, nhưng cô lại hi vọng chính anh ta có thể dẫn mình đến một thành phố chứa kho báu cổ đại đã biến mất từ lâu. Lúc này Alan đã dũng cảm lên đường giải cứu cô và cả hai cuốn vào một cuộc phiêu lưu trong rừng sâu để tìm kiếm cổ vật.', 2017, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/nYprSo2.jpg', '//ok.ru/videoembed/3232540658347'),
(41, 'NHỮNG KẺ XẤU XA', 3, 'Những Kẻ Xấu Xa - The Bad Guys câu chuyện kể về một băng nhóm động vật sinh sống ngoài vòng pháp luật, gồm có chú chó Sói xấu xa làm đầu xỏ, đệ tử của anh gồm có một cô Nhện, anh cá Mập, Cá Hổ và anh chàng Rắn. Cả năm người đệ tử này trong quá khứ đều là những tên tội phạm khét tiếng, chuyên trộm cướp trong thành phố. Giờ đây, cả nhóm phải thực hiện một tử thách hoàn toàn mới mẻ trong cuộc đời của mình, chính là phải từ bỏ làm việc ác, cải tạo quy chính trở thành những con ngời lương thiện. Liệu nhiệm vụ của họ có thể thành công?', 2022, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/UgVDM2K.png', '//ok.ru/videoembed/3232540658347'),
(42, 'PHI CÔNG SIÊU ĐẲNG MAVERICK', 3, 'Phi Công Siêu Đẳng Maverick - Top Gun: Maverick kể về người đàn ông Maverick một phi công hơn ba mươi năm phục vụ trong quân đội. Anh cũng từng là một tay phi công quả cảm hàng đầu. Nhưng giờ đây, anh lại tìm cách để né tránh sự thăng chức vì khiến anh cảm thấy bó buộc và không thể trở về làm chính mình. Lúc này, Maverick bắt đầu thực hiện nhiệm vụ đặc biệt, anh phjair đối đùa với Trung Úy Bradley Bradshaw cũng là người con trai của bạn thân quá cố. Ở nhiệm vụ này Maverick phải đối mặt với nguy hiểm đến tính mạng, mà còn đối mặt với quá khứ đen tối.', 2003, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/psfesq3.jpg', '//ok.ru/videoembed/3232540658347'),
(43, 'NGƯỜI KHỞI LỬA', 3, 'Người Khởi Lửa - Firestarter chàng trai Andy McGee đã thành công thực hiện một thí nghiệm thực thể bí mật của chính phủ bí ẩn có tên là The Shop. Sau khi trải qua một cuộc thí nghiệm, Andy McGee đã phát hiện ra được bản thân mình sở hữu sức mạnh tâm linh và gặp gỡ được tình yêu trong đời. Cả hai cùng nhau chung sống và có được một cô con gái với năng lực đặc biệt. Tuy nhiên, cả gia đình phải tìm cách trốn thoát khỏi sự truy lùng của The Shop.', 2005, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/6ixXaq3.png', '//ok.ru/videoembed/3232540658347'),
(44, 'THỎ GÀ RÀ KHO BÁU', 3, 'Thỏ Gà Rà Kho Báu - Chickenhare and the Hamster of Darkness kể về Chickenhare một vị anh hùng trẻ tuổi, từ khi sinh ra đã có một thân hình kỳ dị, khi là nửa thỏ nửa gà. Chickenhare đã may mắn được vị vua Peter một nhà thám hiểm nổi tiếng nhận nuôi. Chickenhare luôn mong muốn và háo hức với những cuộc phiêu lưu. Tuy nhiên, Chickenhare lại phát hiện ra người cậu của mình vừa ra tù và có kế hoạch lật đổ Peter. Do đó Chickenhare cùng với chú rùa Abe và cô nàng Meg bắt đầu chuyến đi kỳ thú để ngăn chặn kế hoạch của cậu.', 2020, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/YrBvHjw.jpg', '//ok.ru/videoembed/3232540658347'),
(45, ' ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM', 3, 'Án Mạng Liên Hoàn Lúc Nửa Đêm - Haunted Tales bộ phim có nội dung kể về ba câu chuyện ngắn kinh dị. Câu chuyện thứ nhất về chàng Pete một doanh nhân trẻ tuổi đã bắt taxi từ sân bay về nhà, tuy nhiên anh gặp phải một tên lái xe kỳ quặc và dần dần tiết lộ ra được các bí mật về quá khứ của Pete. Câu chuyện thứ hai về cô gái Tiwa, xinh đẹp và thông minh, cô có khả năng giao tiếp với những linh hồn đã khuất và giờ đây, cô đã giúp đỡ tên chủ khách sạn ma ám. Phát hiện ra được một vụ án kinh hoàng tại nơi này. Câu chuyện cuối cùng là kể về Jess một nhà văn kinh dị, anh đã dính một lời nguyền bí ẩn, và dần dần những điều anh viết đều diễn ra sự thậ', 2008, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/IIMfikZ.png', '//ok.ru/videoembed/3232540658347'),
(46, 'KHỞI NGUỒN ĐẠI DỊCH', 3, 'Khởi Nguồn Đại Dịch - Seoul Station một bộ phim hoạt hình phần ngoại truyện của phim \"Train To Busan\". Nội dung bộ phim kể về câu chuyện đẫm nước mắt, của người cha đang vô vọng tìm kiếm đứa con gái gái của mình tại thành phố Seoul rộng lớn đang sụp đỗ vì đại dịch zombie. Không những thế, phim còn giải mã được nguồn gốc của đại dịch và cách zombie lên được chuyến tàu đến Busan.', 2011, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/Kqz53Jx.jpg', '//ok.ru/videoembed/3232540658347'),
(47, 'TĂNG TỐC.. VỀ PHÍA EM', 3, 'Tăng Tốc.. Về Phía Em - Fast & Feel Love kể về chàng trai Kao một vận động viên cũng là nhà vô địch thế giới của bộ môn thể thao xếp ly với tốc độ nhanh nhất. Tuy sự nghiệp của anh thành công, và có được sự nổi tiếng, nhưng Kao vẫn là một đứa trẻ to xác và chỉ biết ăn ngủ, tập luyện. Tất cả mọi vấn đề xung quanh anh đều được Jay cô bạn gái giải quyết. Một hôm, Jay bất ngờ mở lời chia tay Kao, khiến anh bị sốc và gần như mất hết tất cả. Cũng từ đó cuộc sống của Kao bắt đầu thay đổi, và cùng với sự xuất hiện của đối thủ mới khiến chức quán quân của cậu bị lung lây.', 2002, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/OALJI6w.png', '//ok.ru/videoembed/3232540658347'),
(48, 'XE CẤP CỨU', 3, 'Xe Cấp Cứu - Ambulance xoay quanh câu chuyện về hai người anh em đã lên kế hoạch vụ cướp ngân hàng lớn tại LA. Sau khi thực hiện vụ cướp thành công, cả hai đã đánh cắp chiếc xe cứu thương, và lên đường chạy trốn. Từ đó diễn ra một cuộc rượt đuổi đầy gấy cấn và khốc liệt giữa hai tên tội phạm và những cảnh sát gây náo loạn đường phố LA.', 2014, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/CZbXmkU.png', '//ok.ru/videoembed/3232540658347'),
(49, 'CHẠY TRỐN ĐỐI ĐẦU', 3, 'Chạy Trốn Đối Đầu - Run Hide Fight câu chuyện kể về cô nàng nữ sinh Zoe Hull chỉ mới 17 tuổi, đã phải nỗ lực, và dùng trí thông minh, cũng như các kỹ năng sinh tồn của bản thân để sống sót khi chiến đấu với những kẻ ác xã súng ở trường. Không những thế, Zoe Hull vừa chiến đấu giúp những người bạn cùng lớp sống sót thoát ra khỏi bên ngoài và tìm kiếm sự trợ giúp.', 2009, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/fZOcN1A.jpg', '//ok.ru/videoembed/3232540658347'),
(50, 'NGÀY 24', 3, 'Ngày 24 - The Advent Calendar câu chuyện kể về cô nàng Eva một vũ công múa ba lê, sau khi cô gặp phải một tai nạn xe hơi và bị thương nặng, khiến cô từ bỏ đam mê của mình và gắng bỏ với chiếc xe lăn trong quãng đời còn lại. Một hôm, cô bạn thân Sophie tới thăm và đã dành tặng cho Eva một món quà đặc biệt vào dịp sinh nhận. Thế nhưng, trong khoảng thời gian đến giáng sinh, Eva phải đối mặt với những sự việc kỳ lạ đầy kinh hoàng.', 2003, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/Df5cSwL.png', '//ok.ru/videoembed/3232540658347'),
(51, 'NÀNG TIÊN CÁ Ở PARIS', 3, 'Nàng Tiên Cá Ở Paris - A Mermaid In Paris / Une sirène à Paris người đàn ông Gaspard đã mất niềm tin vào tình yêu, sau khi anh trải qua những cuộc chia ly đau khổ, và anh tin rằng bản thân mình không thể trao tình yêu cho ai nữa. Bỗng một hôm, Gaspard đang đi dạo trên con đường mòn ven sông thì bất ngờ gặp gỡ cô nàng tiên cá Lula đang bị thương, do đó anh quyết định đưa cô về nhà anh trị thương. Nhưng cô lại mang trong mình lời nguyền, nếu người đàn ông nào yêu cô sẽ đều bị chết. Liệu tình yêu giữa người đàn ông thất bại và cô nàng tiên cá bị lời nguyền sẽ ra sao?', 2005, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/V4Vi1bd.png', '//ok.ru/videoembed/3232540658347'),
(52, 'BATMAN: VẠCH TRẦN SỰ THẬT', 7, 'Batman: Vạch Trần Sự Thật - The Batman lấy bối cảnh tại thế giới ngầm của thành phố Gotham, khi nơi đây xuất hiện một tên tội phạm giết người khét tiếng Riddler, hắn chuyên sát hại những tên chính trị gia lớn của thành phố. Sau mỗi vụ án giết người, hắn đều để lại những câu hỏi hóc búa cho Batman. Lúc này anh chàng hiệp sĩ bóng đêm Batman, bắt đầu tham gia vào cuộc điều tra về những chứng cứ mà tên Riddler để lại cho mình. Dần dần anh phát hiện ra những sự thật động trời về những kẻ tham nhũng và có liên quan đến gia đình của anh.', 2004, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/YmbCnq7.jpg', '//ok.ru/videoembed/3232540658347'),
(53, 'CẢNH SÁT VŨ TRỤ', 7, 'Cảnh Sát Vũ Trụ – Lightyear xoay quanh câu chuyện về anh chàng cảnh sát Buzz Lightyear là một nhân vật đến từ bộ phim hoạt hình Toy Story nổi tiếng. Khi Buzz Lightyear cùng với các thành viên trong đội Star Command đang bị mắc kẹt trên mặt đất cả năm, giờ đây bọn họ đang chuẩn bị tiến hành thực hiện chuyến bay thử nghiệm đầu tiên của mình. Sau khi thành công vào không gian Buzz đã phải chiến đấu với hoàng đế Zurg cùng với đội quân hùng mạnh của hắn ta.', 2011, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/bEeeS19.png', '//ok.ru/videoembed/3232540658347'),
(54, 'CƯỚI EM ĐI', 7, 'Cưới Em Đi - Marry Me kể về câu chuyện của hai ngôi sao ca nhạc hàng đầu Kat Valdez và Bastian. Khi tin kết hôn của họ được tung ra, khiến cho đông đảo dân chúng hâm một trên toàn cầu bất ngờ. Tưởng chừng sẽ có một kết thúc đầy viên mãn, thì trong đám cưới chuẩn bị nói lời thề Kat Valdea phát hiện ra rằng Bastian không hề chung thủy, nên do đó cô nàng kat đã kết hôn với anh chàng Charlie một người lạ trong lễ cưới của mình.', 2011, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/XJrHL05.jpg', '//ok.ru/videoembed/3232540658347'),
(55, 'TRĂNG RƠI', 7, 'Trăng Rơi - Moonfall mở đầu bộ phim kể về một thế lực bí ẩn đã làm cho mặt trăng ra khỏi quỹ đạo xung quanh Trái Đất, và trong vòng thời gian tới mặt trăng có thể va chạm với Trái Đất khiến cho mọi thứ bị diệt vong. Lúc này, vị giám đốc điều hành của NASA cùng với cựu phi hành gia Jo Fowler cho rằng bọn họ đang nắm giữ chìa khóa giải cứu nhân loại.', 2000, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/BIACKeL.jpg', '//ok.ru/videoembed/3232540658347'),
(56, 'TÍN HIỆU DIỆT VONG', 7, 'Tín Hiệu Diệt Vong - Project Gemini lấy bối cảnh vào ba năm sau, khi một đại dịch virus đã gần như phá hủy hoàn toàn Trái Đất, và số phận của nhân loại giờ đây đang được các nhà khoa học đang che giấu, và bọn họ còn quyết định thực hiện một kế hoạch tạo dựng cuộc sống mới ngoài vũ trụ. Lúc này 3 phi hành đoàn, là Steve, David và Leona được gia nhập vào nhiệm vụ đến tìm hiểu sự sống trên hành tinh Tess. Thế nhưng, họ không ngờ rằng điều bí ẩn và nguy hiểm đang chờ đợi bọn họ.', 2020, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/OTbk5WJ.png', '//ok.ru/videoembed/3232540658347'),
(57, 'ÁN MẠNG TRÊN SÔNG NILE', 7, 'Án Mạng Trên Sông Nile - Death on the Nile kể về vị thám tử Poirot bắt đầu chuyến hành trình tham quan Ai Cặp tại chiếc du thuyền nhỏ dành cho giới nhà giàu. Trên chuyến đi, Poirot đã gặp gỡ được một cặp đôi nam thanh nữ tú, đang tận hưởng kỳ trăng mặt lãng mạn của mình là Linnet Doyle một triệu phú trẻ cùng với người chồng mới cưới Simon Doyle. Không hạnh phúc được bao lâu thì chuyến đi của họ bỗng bị phá hỏng sau khi phát hiện người tình cũ của Simon là Bellefort đã bám theo và phá vỡ mọi thứ.', 2012, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/XiD8obR.jpg', '//ok.ru/videoembed/3232540658347'),
(58, 'GẤU ĐỎ BIẾN HÌNH', 7, 'Gấu Đỏ Biến Hình - Turning Red xoay quanh câu chuyện về về cô bé Mei Lee chỉ mới 13 tuổi và đang trong độ tuổi dậy thì, và cô bé mong muốn trở thành một cô con gái ngoan trong mắt bố mẹ và gia đình. Thế nhưng, sau bên trong tâm trí cô lại luôn có một khao khát khám phá mọi thứ ở thế giới bên ngoài. Thế nhưng, một ngày Mei Lee bất ngờ bị biến thành một chú gấu đỏ khổng lồ và từ đây cuộc sống của cô bắt đầu thay đổi.', 2000, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/YSFBdxy.png', '//ok.ru/videoembed/3232540658347'),
(59, 'RỪNG THẾ MẠNG', 7, 'Rừng Thế Mạng - Survive bộ phim kinh dị Việt Nam được lấy bối cảnh tại Tà Năng - Phan Dũng ở Bình Thuật. Khi nơi đây là địa điểm lý tưởng dành cho những phượt thủ trải nghiệm. Xoay quanh câu chuyện về anh chàng Kiên, khi lúc này Kiên cùng với những người bạn của mình bắt đầu một chuyến đi phượt, thì bất ngờ giữa chừng Kiên bị lạc khỏi đoàn và một mình trải qua cuộc chiến sinh tồn giữa khu rừng trong đêm tối. Không những thế Kiên phải đối mặt với những cơn đói khát và vết thương, những nguy hiểm đang rình rập tại khu rừng. Liệu Kiên sẽ phải làm thế nào để sống sót chờ người tới cứu.', 2019, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/Lr7tgqN.png', '//ok.ru/videoembed/3232540658347'),
(60, 'QUÁI XẾ GIAO HÀNG', 7, 'Quái Xế Giao Hàng - Special Delivery cô gái trẻ Eun-Ha là một tay lái xe siêu đẳng và cô làm nghề tài xế chuyên giao những kiện hàng đặt biệt. Cô ấy luôn nhận các đơn hàng và mức giá hợp lý, 100% đều giao thành công. Thế nhưng giờ đây, Eun-Ha lại bị dính vào một vụ giao hàng bất thường khi lúc này đứa trẻ được ngồi trên xe cô.', 2012, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/iWQvXhF.jpg', '//ok.ru/videoembed/3232540658347'),
(61, 'ĐÊM SỐNG CÒN', 7, 'Đêm Sống Còn - Survive The Night xoay quanh câu chuyện về một băng cướp đã bị những cảnh sát truy đuổi và bị thương nặng. Bọn chúng vô cùng thông mình, khi không đi đến bệnh viện để chữa trị vì sợ bị bắt, thế nên chúng đã đi theo một vĩ bác sĩ và đi đến căn nhà riêng của anh ta. Bọn chúng bắt những thành viên trong gia đình và uy hiếp anh phải trị thương cho chúng. Liệu anh sẽ làm thế nào để có thể giải cứu được gia đình và sống sót khỏi băng cướp tàn bạo này?', 2012, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/U8IBlKV.png', '//ok.ru/videoembed/3232540658347'),
(62, 'CÂU CHUYỆN PHÍA TÂY', 7, 'Câu Chuyện Phía Tây - West Side Story lấy bối cảnh tại thành pphoos New York vào những năm 1950, xoay quanh câu chuyện tình yêu về hai thiếu niên Jets và Sharks. Cả hai đều là những thành viên trong nhóm nhảy đường phố, nơi tập hợp những người đến từ nơi và sắc tộc khác nhau và đều có chung một niềm đam mê mãnh liệt với âm nhạc. Mọi người cùng nhau cố gắng, nỗ lực thực hiện ước mơ và tình yêu của chính mình.', 2009, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/Un5tgxl.png', '//ok.ru/videoembed/3232540658347'),
(63, 'NHÀ TRẮNG THẤT THỦ', 7, 'Nhà Trắng Thất Thủ - Olympus Has Fallen xoay quanh câu chuyện tại Tòa Nhà Trắng của tổng thống Mỹ bất ngờ bị bọn khủng bố được trang bị vũ trang và đào tạo chuyên nghiệp tấn công đầy táo bạo. Cả toàn nhà bị phá hủy và vị tổng thống Benjamin Asher cùng với những nhân viên khác của ông đều bị bọn chúng bắt làm con tin và ẩn nấp tại hầm trú dưới lòng đất. Lúc này, Mike Banning một cựu nhân viên an ninh của tổng thống, đang gấp rút chạy đến hiện trường, tuy nhiên, đầu tiên anh phải chạy đua với thời gian để giải cứu cậu con trai của Asher đang mắc kẹt trong nhà trắng. Và bắt đầu kế hoạch giải cứu tổng thống trước khi bọn chúng thực hiện âm mưu của mình.', 2009, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/zSrknfB.png', '//ok.ru/videoembed/3232540658347'),
(64, 'GIA TỘC GUCCI', 7, 'Gia Tộc Gucci - House of Gucci dựa trên một sự kiện có thật trong lịch sử. lấy bối cảnh vào những năm 1980 xoay quanh câu chuyện về cô gái Patrizia Reggiani vô cùng quyến rũ và xinh đẹp đã kết hôn với Maurizio Gucci vị cháu trai của nhà sáng tập tập đoàn thời trang Gucci đầy xa xỉ. Cả hai đã chung sống với nhau hơn 10 năm và có được hai người con, thế nhưng mọi thứ thay đổi sau khi Maurizio Gucci đã ngoại tình với một cô gái trẻ. Điều này đã khiến cho Patrizia thuê một sát thủ khét tiếng và giết hại Maurizio gây chấn động.', 2006, 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/yBF5aeU.jpg', '//ok.ru/videoembed/3232540658347'),
(65, 'BẪY NGỌT NGÀO', 7, 'Bẫy Ngọt Ngào - Phim Chiếu Rạp Việt Nam xoay quanh câu chuyện về một hội bạn thân thiết có tên là \"hội ế\" gồm có Camy, Linh Đan, Ken và QUỳnh lam. Bọn họ đã nhiều năm xa cách không gặp nhau chỉ vì mỗi người đều phải lo cho sự nghiệp và cuộc sống tương lai của mình. Tuy nhiên, 3 năm sau, Camy tổ chức lễ kỉ niệm đám cưới và cả nhóm có cơ hội được gặp lại nhau. Nhưng từ đây, mỗi người trong nhóm đều phải đối mặt với những khó khăn, sóng gió trong cuộc sống của mình ở tương lai.', 2012, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/7SgqYu0.png', '//ok.ru/videoembed/3232540658347'),
(66, 'LỜI THỈNH CẦU BÍ ẨN', 7, 'Lời Thỉnh Cầu Bí Ẩn - A Simple Favor xoay quanh câu chuyện về người phụ nữ Stephanie là một người mẹ luôn tận tụy ân cần và cũng là một vlogger vô cùng nổi tiếng trên mạng xã hội. Cô đã kết bạn với Emily một người phụ nữ trong giới thượng lưu giàu có đầy bí ẩn, có cậu con trai là Nicky học cùng trường với Miles con trai của cô. Thế nhưng, một hôm Emily đã nhờ Stephanie đón cậu con trai của mình thì sau đó bỗng nhiên mất tích một cách đầy bí ẩn, vì thế Stephanie bắt đầu cuộc tìm kiếm và điều tra sâu vào trong quá khứ đầy đen tối của Emily.', 2016, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/4THeAW0.png', '//ok.ru/videoembed/3232540658347'),
(67, ' GÓA PHỤ ĐEN', 7, 'Góa Phụ Đen - Black Widow xoay quanh câu chuyện về người phụ nữ Natasha Romanoff hay còn được gọi với cái tên khác là Góa Phụ Đen, cô đang phải đối mặt với những sự việc đầy nguy hiểm đến tính mạng và có liên quan đến những mối thù từ quá khứ của cô. Không những vậy còn bị tổ chức bí ẩn vô cùng mạnh mẽ truy lùng cô gắt gao. Giờ đây Natasha phải đối mặt với quá khứ trở thành điệp viên một lần nữa và tạo dựng lại các mối quan hệ đã tan vỡ để trở thành Avenger.', 2004, 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/QpUTDWW.png', '//ok.ru/videoembed/3232540658347'),
(68, ' SHERLOCK GNOMES: THÁM TỬ SIÊU QUẬY', 7, 'Sherlock Gnomes: Thám Tử Siêu Quậy - Sherlock Gnomes xoay quanh câu chuyện về Gnomeo và Juliet đã chuyển đến một khu vườn mới tại London, tưởng chừng là ngôi nhà trong mơ của cặp đôi. Thế nhưng, biến cố lại ập đến khi bắt đầu có sự xuất hiện của loại người, những vị thần lùn mất tích một cách bí ẩn, khu vườn trở nên hoang vắng. Vì thế, Gnomeo và Juliet bắt đầu cuộc hành tình tìm kiếm những người bạn của mình, may mắn thay sự xuất hiện của vị thám tử tài ba Sherlock Gnomes là tia hi vọng của cặp đôi để có thể giúp mọi người quay trở lại.', 2020, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/YFIEG6a.png', '//ok.ru/videoembed/3232540658347'),
(69, 'ĐIỆP VỤ CHIM SẺ ĐỎ', 7, 'Điệp Vụ Chim Sẻ Đỏ - Red Sparrow xoay quanh câu chuyện về cô nàng Dominika Egorova bắc đắc dĩ được chọn và đào tạo để có thể trở thành một điệp viên đầy quyến rũ của Tổng cục an Ninh Nga. Dominika Egorova đang phải cố gắng tận dụng và biến cơ thể của mình thành một loại vũ khí giết người, tuy nhiên cô còn phải đấu tranh với tâm trí của mình trong suốt quá trình huấn luyện. Mục tiêu đầu tiên của cô là Nate Nash một nhân viên CIA, có trách nhiệm nằm vùng đầy nhạy cảm của cơ quan tình báo Nga. Hai con người trẻ tuổi bị cuốn vào vòng xoáy lừa dối và nguy hiểm, có thể de dọa đến sự nghiệp của họ, và sự trung thành của hai quốc gia.', 2004, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/pFLCX73.png', '//ok.ru/videoembed/3232540658347'),
(70, 'SIÊU ĐẠI CHIẾN THÁI BÌNH DƯƠNG', 7, 'Siêu Đại Chiến Thái Bình Dương - Pacific Rim khi một đội quân sinh vật biển đầy quái dị được gọi là Kaiju, bọn chúng xuất hiện từ dưới biển lên đất liền và tạo ra một cuộc chiến kinh hoàng. Để có thể ngăn chặn được sự tàn phá của Kaiju, con người đã bắt đầu phát minh ra những con robot chiến đấu khổng lồ còn gọi là Jaegers, và được điều khiển bằng thần kinh của hai con người nằm tại khoang ở ngực robot. Thế nhưng, Jaegers vẫn không thể đánh bại được Kaiju và cả thế giới phải đối mặt với sự diệt vong. Niềm hy vọng của bọn họ lúc này là một cựu phi công, một anh chàng thực tập sinh và một con robot Jaegers cũ kỹ.', 2020, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/OlfJzgD.png', '//ok.ru/videoembed/3232540658347'),
(71, 'THỎ PETER', 7, 'Thỏ Peter - Peter Rabbit xoay quanh câu chuyện về chú thỏ Peter đầy, tinh quái, tăng động và có khí chất trở thành một thủ lĩnh mạnh mẽ, trong khu vườn xanh tốt. Thế nhưng, một hôm khi khu vườn có được người chủ mới đầy điển trai là McGregor, Peter không hề do dự mà đối đầu với anh ta, để có thể giành lại được vùng đất mà đáng lẻ thuộc về Peter và những người bạn của mình', 2022, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/3KwsMA8.png', '//ok.ru/videoembed/3232540658347'),
(72, 'THƯỚC VẢI MA MỊ', 4, 'Thước Vải Ma Mị - Undying Secret bộ phim của Thái Lan thuộc thể loại kinh dị, tình cảm, do đạo diễn Sataporn Nakwilairoj chỉ đạo thực hiện và có sự tham gia của các diễn viên Wawwa Nichari Chokprajakchat, Yui Chiranan Manochaem, Fluke Jira Danbawornkiat,Nike Nitidon Pomsuwan,... Nội dung phim Thước Vải Ma Mị - Undying Secre bắt đầu từ việc gia đình Elada sở hữu một tấm vải Luntaya màu hồng tuyệt đẹp do chính tay một bà kỵ của cô diệt cho người công chsua Minphayu. Thế nhưng, sau đó bất ngờ cô mất hết thị lực một cách kỳ lạ. Lúc này Elada vì quá đam mê với nghề may dệt nên cô đã tham gia vào một học viện tại anh và thành công tốt nghiệp trở về lại Thái Lan. Tại đây cô bắt đầu gặp gỡ được những người bạn mới và cùng nhau giải mã những bí ẩn về amxnh vải Lantaya.', 2016, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/DkkaKl5.jpg', '//ok.ru/videoembed/3232540658347'),
(73, 'NGÔI NHÀ HOA', 3, 'Ngôi Nhà Hoa: Phim Điện Ảnh - The House Of Flowers: The Movie, kể về câu chuyện của các anh em nhà De La Mora, họ quyết định trở về ngôi nhà xưa để thực hiện một kế hoạch để đời. Đó là tìm kiếm kho báu vẫn đang bị cất giấu trong căn nhà cũ kỹ này!', 2005, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/ShmuhG7.jpg', '//ok.ru/videoembed/3232540658347'),
(74, 'ĐI VỀ ĐÂU HỠI, AIDA?', 4, 'Đi Về Đâu Hỡi, Aida? - Quo Vadis, Aida? Kể về câu chuyện của nữ phiên dịch viên Jasmila Zbanic khi cô cố gắng tìm cách cứu chồng và con trai của mình khỏi cuộc thảm sát tàn khốc. Nhưng liệu nỗ lực ấy khó được đền đáp khi mà chiến tranh đang leo thang.', 2016, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/3nbF3in.jpg', '//ok.ru/videoembed/3232540658347'),
(75, 'VÙNG ĐẤT HOANG DÃ', 5, 'Vùng Đất Hoang Dã - Wildland, xoay quanh  câu chuyện về cô bé Ida, sau khi mẹ mất Ida đã chuyển sống cùng với các anh em họ và cô của mình. Trái ngược hoàn toàn với tình cảm yêu thương, thì bên ngoài vô cung gay gắt và khủng bố.', 2005, 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/3IFZpcq.jpg', '//ok.ru/videoembed/3232540658347'),
(76, 'KHÁT KHAO TỰ DO', 6, 'Alice: Khát Khao Tự Do - Alice, xoay quanh câu chuyện về cuộc đời của cô gái nô lệ tên Alice ở điền thôn nọ, dưới sự áp bức của người chủ và tên Paul ác độc, Alice quyết tâm trốn đi. Trong khi băng qua một khu rừng, Alice nhìn thấy đường cao tốc trải dài, đó cũng lúc lúc cô nhận ra thực chất năm nay là năm 1973.', 2014, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/mzR6syb.jpg', '//ok.ru/videoembed/3232540658347'),
(77, 'DASHCAM', 5, 'Dashcam - Dashcam, kể về câu chuyện của hai người bạn thân, họ quyết định thực hiện chuyến đi kinh hoàng với việc phát trực tiếp qua internet. Nhưng cả hai người không ngờ rằng, đoạn video trực tiếp của họ đã ghi lại những khoảnh khắc đáng sợ nhất trong đời họ.', 2021, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/4yT4GGb.jpg', '//ok.ru/videoembed/3232540658347'),
(78, 'ĐIỆP VIÊN BẤT BẠI', 7, 'Điệp Viên Bất Bại - The Spy Who Never Dies, kể về câu chuyện tình yêu của một vị điệp viên siêu phàm. Trong khi anh phải lòng và yêu một người phụ nữ hấp dẫn, thì những người xung quanh lại phản đối và tìm đủ mọi cách để chia rẽ họ. Vị điệp viên sẽ làm gì để xử lý tình huống éo le trước mắt?', 2006, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/LoVamVb.jpg', '//ok.ru/videoembed/3232540658347'),
(80, 'THƯỚC VẢI MA MỊ', 6, 'Thước Vải Ma Mị - Undying Secret bộ phim của Thái Lan thuộc thể loại kinh dị, tình cảm, do đạo diễn Sataporn Nakwilairoj chỉ đạo thực hiện và có sự tham gia của các diễn viên Wawwa Nichari Chokprajakchat, Yui Chiranan Manochaem, Fluke Jira Danbawornkiat,Nike Nitidon Pomsuwan,... Nội dung phim Thước Vải Ma Mị - Undying Secre bắt đầu từ việc gia đình Elada sở hữu một tấm vải Luntaya màu hồng tuyệt đẹp do chính tay một bà kỵ của cô diệt cho người công chsua Minphayu. Thế nhưng, sau đó bất ngờ cô mất hết thị lực một cách kỳ lạ. Lúc này Elada vì quá đam mê với nghề may dệt nên cô đã tham gia vào một học viện tại anh và thành công tốt nghiệp trở về lại Thái Lan. Tại đây cô bắt đầu gặp gỡ được những người bạn mới và cùng nhau giải mã những bí ẩn về amxnh vải Lantaya.', 2007, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/DkkaKl5.jpg', '//ok.ru/videoembed/3232540658347'),
(81, 'NGÔI NHÀ HOA', 6, 'Ngôi Nhà Hoa: Phim Điện Ảnh - The House Of Flowers: The Movie, kể về câu chuyện của các anh em nhà De La Mora, họ quyết định trở về ngôi nhà xưa để thực hiện một kế hoạch để đời. Đó là tìm kiếm kho báu vẫn đang bị cất giấu trong căn nhà cũ kỹ này!', 2004, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/ShmuhG7.jpg', '//ok.ru/videoembed/3232540658347'),
(82, 'ĐI VỀ ĐÂU HỠI, AIDA?', 6, 'Đi Về Đâu Hỡi, Aida? - Quo Vadis, Aida? Kể về câu chuyện của nữ phiên dịch viên Jasmila Zbanic khi cô cố gắng tìm cách cứu chồng và con trai của mình khỏi cuộc thảm sát tàn khốc. Nhưng liệu nỗ lực ấy khó được đền đáp khi mà chiến tranh đang leo thang.', 2016, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/3nbF3in.jpg', '//ok.ru/videoembed/3232540658347'),
(83, 'VÙNG ĐẤT HOANG DÃ', 6, 'Vùng Đất Hoang Dã - Wildland, xoay quanh  câu chuyện về cô bé Ida, sau khi mẹ mất Ida đã chuyển sống cùng với các anh em họ và cô của mình. Trái ngược hoàn toàn với tình cảm yêu thương, thì bên ngoài vô cung gay gắt và khủng bố.', 2017, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/3IFZpcq.jpg', '//ok.ru/videoembed/3232540658347'),
(84, 'KHÁT KHAO TỰ DO', 6, 'Alice: Khát Khao Tự Do - Alice, xoay quanh câu chuyện về cuộc đời của cô gái nô lệ tên Alice ở điền thôn nọ, dưới sự áp bức của người chủ và tên Paul ác độc, Alice quyết tâm trốn đi. Trong khi băng qua một khu rừng, Alice nhìn thấy đường cao tốc trải dài, đó cũng lúc lúc cô nhận ra thực chất năm nay là năm 1973.', 2003, 12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/mzR6syb.jpg', '//ok.ru/videoembed/3232540658347'),
(85, 'DASHCAM', 6, 'Dashcam - Dashcam, kể về câu chuyện của hai người bạn thân, họ quyết định thực hiện chuyến đi kinh hoàng với việc phát trực tiếp qua internet. Nhưng cả hai người không ngờ rằng, đoạn video trực tiếp của họ đã ghi lại những khoảnh khắc đáng sợ nhất trong đời họ.', 2017, 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/4yT4GGb.jpg', '//ok.ru/videoembed/3232540658347'),
(86, 'ĐIỆP VIÊN BẤT BẠI', 6, 'Điệp Viên Bất Bại - The Spy Who Never Dies, kể về câu chuyện tình yêu của một vị điệp viên siêu phàm. Trong khi anh phải lòng và yêu một người phụ nữ hấp dẫn, thì những người xung quanh lại phản đối và tìm đủ mọi cách để chia rẽ họ. Vị điệp viên sẽ làm gì để xử lý tình huống éo le trước mắt?', 2019, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/LoVamVb.jpg', '//ok.ru/videoembed/3232540658347'),
(87, 'NGÔI SAO HỌC ĐƯỜNG', 6, 'Ngôi Sao Học Đường - Hollywood Stargirl, xoay quanh hành trình chinh phục giấc mơ âm nhạc của cô gái trẻ Caraway. Giờ đây Caraway quyết định rời khỏi Caraway để bước chân ra thế giới rộng lớn. Cũng nhờ vậy mà Caraway có thêm nhiều bài học và khám phá được sức mạnh tiềm ẩn của bản thân.', 2020, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/vQ3NPEC.jpg', '//ok.ru/videoembed/3232540658347'),
(88, 'BỐ GIÀ PHẦN 3', 6, 'Bố Già Phần 3 - The Godfather: Part III, xoay quanh câu chuyện về người đàn ông 60 tuổi đang cố gắng bảo vệ gia đình và đế chế mà ông gây dựng nên. Đồng thời ông đang tìm kiếm một người kế vị phù hợp nhất để tiếp quản công việc của mình.', 2018, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/zVCSr5g.jpg', '//ok.ru/videoembed/3232540658347'),
(89, 'ĐẢO LỬA', 6, 'Đảo Lửa - Fire Island, bắt đầu từ chuyến đi nghỉ mát của một đôi bạn thân, trong chuyến đi này họ không chỉ có được niềm vui mà còn nhận được sự giúp đỡ từ những người bạn mới thân thiện. Bộ phim tình cảm - hài hước này có sự tham gia của các ngôi sao như: Margaret Cho, Bowen Yang, Joel Kim Booster', 2010, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/QBjmKYC.jpg', '//ok.ru/videoembed/3232540658347'),
(90, 'HOMEBOUND', 6, 'Homebound xoay quanh câu chuyện về người phụ nữu Holly sau khoảng thời gian xa cách, giờ đây là lúc cô vui mừng sau khi gặp gỡ được ba đứa con của vị hôn phu Richard lần đầu sau một bữa tiệc sinh nhật đứa con út ở vùng nông thôn nước Anh. Cô nàng Holly vô cùng hồi hợp để tạo một ấn tượng tốt trước những đứa trẻ nhưng kh đến nơi cô lại thấy mọi thứ hoàn toàn khác xa với những gì cô tưởng tượng.', 2006, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/WBagHOJ.jpg', '//ok.ru/videoembed/3232540658347'),
(91, ' CÔ BÉ CARRIE', 6, 'Cô Bé Carrie - Carrie cô gái trẻ tuổi teen Carrie White vô cùng nhút nhát và đau khổ, không có bạn bè cũng như không được mọi người quan tâm. Cô chỉ có mỗi người mẹ độc đoán của mình sùng đạo. Tuy nhiên, vào buổi dạ hội năm cuối cấp của mình, Carrie White lại bị các bạn cùng lớp làm mất mặt trước đám đông vì thế cô đã giảo phóng được nỗi uất ức của bản thân.', 2001, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/0q2ulg7.jpg', '//ok.ru/videoembed/3232540658347'),
(92, 'CHƯƠNG TRÌNH THỰC TẾ Z', 6, 'Chương Trình Thực Tế Z - Reality Z tại phim trường quay phim, nơi các người tham gia và nhà sản xuất đang chuẩn bị quay một chương trình thực tế có tên Olimpo. Nhưng nơi đây bất ngờ trở thành tận thế khi bị các thây ma ám sát từng người một. Mọi thứ xung quanh trở nên hoang tàn và trường quay là nơi trú ẩn an toàn dành cho những người may mắn sống sót và bọn họ bắt đầu tìm kiếm sự trợ giúp từ bên ngoài.', 2007, 9, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/8IfLDJL.jpg', '//ok.ru/videoembed/3232540658347'),
(93, 'GOTHIC', 6, 'Gothic kể về Mary Shelley, vào một đêm mưa lớn ở điền trang của Lord Byron. Khi lúc này một nổi sợ kinh hoàng của bản thân bị bộc lộ và nảy sinh một trí tưởng tượng tình dục và những cơn ác moojgn đen tối ập đến. Giờ đây, Mary Shelley mới nhận ra rằng bản thân của mình đang bị cuốn vào một thế giới đầy bệnh hoạn của người yêu và chị kế của mình.', 2008, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/clgdnK1.jpg', '//ok.ru/videoembed/3232540658347'),
(94, 'NGƯỜI CÁT', 6, 'Người Cát - The Sandman lấy bối cảnh vào năm 1916, người đàn ông Morpheus vị vua của những giấc mơ đã bất ngờ bị một phù thủy hùng mạnh giam giữ lại trong chiếc bình thủy tinh hơn cả thập kỷ. Sau một thời gian bị giam cầm khiến cho cơ thể bị suy yếu và sức mạnh biến mất. Lúc này, Morpheus đã may mắn trốn thoát ra được thế giới bên ngoài, và từ đây anh bắt đầu một cuộc hành trình tìm kiếm những mảnh ghép sức mạnh đã mất của mình.', 2017, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/hMnmBF3.jpg', '//ok.ru/videoembed/3232540658347'),
(95, 'ẤU TRÙNG TINH NGHỊCH: MẶT DÂY TRUYỀN', 5, 'Ấu Trùng Tinh Nghịch: Mặt Dây Truyền - Larva Pendant là một bộ phim ngắn của bộ phim The Larva Island, có thời lượng dài 33 phút do đạo diễn Joe Young cheol chỉ đạo thực hiện và có sự tham gia lồng tiếng của hai diễn viên ang Si Hyun và Hong Bum Ki. Phim Ấu Trùng Tinh Nghịch: Mặt Dây Truyền - Larva Pendant xoay quanh câu chuyện về hai người bạn ấu trùng tinh nghịch Red và Yellow. Giờ đây, bọn họ quyết định rời khỏi hòn đảo thân yêu của mình để đi đến thành phố to lớn tìm kiếm những điều kỳ lạ mới mẻ trong cuộc sống của mình.', 2004, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/s9LQ29B.jpg', '//ok.ru/videoembed/3232540658347'),
(96, 'ẤU TRÙNG TINH NGHỊCH: MẶT DÂY TRUYỀN', 5, 'Ấu Trùng Tinh Nghịch: Mặt Dây Truyền - Larva Pendant là một bộ phim ngắn của bộ phim The Larva Island, có thời lượng dài 33 phút do đạo diễn Joe Young cheol chỉ đạo thực hiện và có sự tham gia lồng tiếng của hai diễn viên ang Si Hyun và Hong Bum Ki. Phim Ấu Trùng Tinh Nghịch: Mặt Dây Truyền - Larva Pendant xoay quanh câu chuyện về hai người bạn ấu trùng tinh nghịch Red và Yellow. Giờ đây, bọn họ quyết định rời khỏi hòn đảo thân yêu của mình để đi đến thành phố to lớn tìm kiếm những điều kỳ lạ mới mẻ trong cuộc sống của mình.', 2004, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/s9LQ29B.jpg', '//ok.ru/videoembed/3232540658347'),
(97, 'MAY MẮN', 5, 'May Mắn - Luck bộ phim hoạt hình thuộc thể loại hài hước, viễn tưởng, phiêu lưu, do đạo diễn Peggy Holmes thực hiện và có sự tham gia lồng tiếng với các diễn viên nổi tiếng Simon Pegg, Flula Borg, Jane Fonda,... Nội dung phim May Mắn - Luck xoay quanh câu chuyện về cô gái Sam một người kém may mắn và luôn gặp những điều xui xẻo trong cuộc sống của mình. Thế nhưng, cuộc đời của cô bắt đầu thay đổi sau khi lạc vào vùng đất may mắn, tại nơi đây cô cùng với những sinh vật sinh sống tại đây bắt đầu cuộc hành trình tìm kiếm sự may mắn về cuộc sống của Sam.', 2001, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/0383VU0.png', '//ok.ru/videoembed/3232540658347'),
(98, 'HỌC VIỆN ẢO THUẬT', 5, 'Học Viện Ảo Thuật - Scooby-Doo! Abracadabra-Doo, xoay quanh câu chuyện về nhóm bạn bè thân thiết của chú chó siêu quậy. Lúc này họ đã lên đường thực hiện chuyến đi kiểm tra bất ngờ Madelyn - em gái Velma. Mà càng thú vị khi Madelyn đang theo học ở học viện pháp thuật Whirlen Merlin, nơi ẩn chứa vô số bất ngờ không bao giờ có thể lý giải!', 2021, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/VQApEUl.jpg', '//ok.ru/videoembed/3232540658347'),
(99, 'ĐÔI CỨU HỘ CỦA CHIP VÀ DALE', 5, 'Đôi Cứu Hộ Của Chip và Dale - Chip n Dale: Rescue Rangers thời gian trôi qua hơn 30 năm sau. Khi lúc này chương trình truyền hình nổi tiếng của hai chú sóc chuột kết thúc và dần bị lãng quên, bọn họ đều bắt đầu một cuộc sống mới. Thế nhưng, khi bọn họ phát hiện ra được một thành trong đoàn làm phim bất ngờ biến mất một cách bí ẩn, Chip và Dale bắt đầu một cuộc hành trình giải cứu người bạn của mình', 2019, 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'img/iMxMFAp.jpg', '//ok.ru/videoembed/3232540658347'),
(100, 'THỜI THƠ ẤU Ở KỶ NGUYÊN VŨ TRỤ', 5, 'Apollo 10½: Thời Thơ Ấu Ở Kỷ Nguyên Vũ Trụ - Apollo 10½: A Space Age Childhood một người đàn ông đã kể lại câu chuyện vào mùa hè năm 1969, khi đó bản thân mình chỉ 10 tuổi sinh sống tại Houston đã tạo nên một câu chuyện lịch sử khi thành công tạo ra một khoảng khắc đặt biệt khi đáp trên mặt trăng. Tuy nhiên, cậu lại có suy nghĩ khác biệt khi bản thân mình sẽ bị loại khỏi vùng ngoại ô và bí mật huấn luyện cho nhiệm vụ thay đổi sứ mệnh thế giới trên mặt trăng.', 2006, 8, '0000-00-00 00:00:00', '2022-06-10 00:44:54', 'img/zVCSr5g.jpg', '//ok.ru/videoembed/3232540658347'),
(135, 'Tân Bao Thanh Thiên 2', 4, 'Bộ phim Tân Bao Thanh Thiên ATV có thời lượng 160 tập, do Kim Siêu Quần đóng vai Bao Công, Lữ Lương Vỹ đóng vai Triển Châu, Phạm Hồng Hiên vai Công Tôn Sách, giúp ATV bảo chứng tỷ suất bạn xem đài suốt một thời gian dài, khiến TVB phải gấp rút cho ra đời phiên bản Bao Thanh Thiên do Địch Long đóng để cạnh tranh.', 199511, 3, '2022-06-09 08:24:09', '2022-06-10 00:43:40', 'img/spl-tvhayorg-17366.jpg', '//ok.ru/videoembed/3232540658347');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `avatar`, `createdAt`, `updatedAt`) VALUES
(2, 'hello2', 'hello2', '/img.png', '2022-06-01 06:51:32', '2022-06-01 06:51:32'),
(4, 'hello3', '$2b$10$JAzkyItdb0uuVo2mwAGkIeaJEkhpKHxYajGsCRyOep9rkSIHhml7G', '/avatar/3.png', '2022-06-01 07:21:13', '2022-06-01 07:21:13'),
(5, 'admin', '$2b$10$bEZ.tPFdF/gt2/pRXkqp0uS27E6BkBlvCna3zUxG6gcUc/13fQbTG', '/avatar/5.png', '2022-06-01 08:43:11', '2022-06-01 08:43:11'),
(6, 'admin1', '$2b$10$T6nuMWLkexpAXUuQcX8PGOhgFYORO7Zo97WdDrw4Dy4ji3oD7.Vka', '/avatar/0.png', '2022-06-07 08:06:45', '2022-06-07 08:06:45'),
(7, 'tintuong', '$2b$10$apONhWaHypbwDcySShhzcudUhL/eLzfAdhCBqEcS06EGIXOuDgPdC', '/avatar/8.png', '2022-06-07 08:11:10', '2022-06-07 08:11:10'),
(8, 'phanvananh', '$2b$10$SWfGz3CtleeVejnQ23m29.ZNhULsc95vAcsloM0APaW5jJczDR9iW', '/avatar/5.png', '2022-06-07 08:12:19', '2022-06-07 08:12:19'),
(9, 'asdf', '$2b$10$35Uzp5h7r8ZBTVLCAyPsIONRDDWkcdopJUWUik1TCYn58KROXnaFC', '/avatar/7.png', '2022-06-07 08:12:54', '2022-06-07 08:12:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`),
  ADD KEY `authorId` (`authorId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `films`
--
ALTER TABLE `films`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `films`
--
ALTER TABLE `films`
  ADD CONSTRAINT `films_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_101` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_103` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_105` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_107` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_109` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_11` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_111` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_113` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_115` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_117` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_119` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_121` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_123` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_125` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_127` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_129` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_13` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_131` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_133` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_135` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_137` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_139` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_141` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_143` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_145` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_147` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_149` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_15` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_151` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_153` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_155` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_157` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_159` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_161` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_163` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_165` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_167` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_169` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_17` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_171` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_173` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_175` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_177` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_179` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_181` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_183` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_185` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_187` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_189` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_19` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_191` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_193` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_195` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_197` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_199` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_201` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_203` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_205` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_207` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_209` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_21` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_211` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_213` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_215` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_217` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_219` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_221` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_223` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_225` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_227` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_229` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_23` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_231` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_233` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_235` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_237` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_239` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_241` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_243` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_245` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_247` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_249` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_25` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_251` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_253` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_255` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_257` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_259` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_261` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_263` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_265` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_267` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_269` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_27` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_271` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_273` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_275` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_277` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_279` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_281` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_283` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_285` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_287` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_289` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_29` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_291` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_293` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_295` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_297` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_299` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_3` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_301` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_303` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_305` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_307` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_309` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_31` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_311` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_313` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_315` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_317` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_319` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_321` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_323` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_325` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_327` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_329` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_33` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_331` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_333` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_335` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_337` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_339` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_341` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_343` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_345` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_347` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_349` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_35` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_351` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_353` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_355` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_357` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_359` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_361` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_363` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_365` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_367` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_369` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_37` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_371` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_373` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_375` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_377` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_379` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_381` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_383` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_385` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_387` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_389` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_39` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_391` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_393` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_395` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_397` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_399` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_401` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_403` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_405` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_407` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_409` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_41` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_411` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_413` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_415` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_417` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_419` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_421` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_423` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_425` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_427` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_429` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_43` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_431` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_433` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_435` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_437` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_438` FOREIGN KEY (`categoryId`) REFERENCES `categorys` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_439` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_45` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_47` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_49` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_5` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_51` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_53` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_55` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_57` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_59` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_61` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_63` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_65` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_67` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_69` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_7` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_71` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_73` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_75` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_77` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_79` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_81` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_83` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_85` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_87` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_89` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_9` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_91` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_93` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_95` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_97` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `films_ibfk_99` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
