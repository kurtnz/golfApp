-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jun 10, 2015 at 07:54 PM
-- Server version: 5.5.34
-- PHP Version: 5.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `golf`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`) VALUES
(1, 'Yarra Bend'),
(2, 'Burnley');

-- --------------------------------------------------------

--
-- Table structure for table `course_hole`
--

CREATE TABLE `course_hole` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL,
  `hole_num` int(11) NOT NULL,
  `white_distance` int(11) NOT NULL,
  `red_distance` int(11) NOT NULL,
  `white_par` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `course_hole`
--

INSERT INTO `course_hole` (`id`, `course_id`, `hole_num`, `white_distance`, `red_distance`, `white_par`) VALUES
(1, 1, 1, 330, 293, 4),
(2, 1, 2, 380, 318, 4),
(3, 1, 3, 308, 297, 4),
(4, 1, 4, 112, 103, 3),
(5, 1, 5, 387, 321, 4),
(6, 1, 6, 327, 288, 4),
(7, 1, 7, 341, 281, 4),
(8, 1, 8, 159, 127, 3),
(9, 1, 9, 445, 377, 5),
(10, 1, 10, 122, 115, 3),
(11, 1, 11, 260, 244, 4),
(12, 1, 12, 370, 331, 4),
(13, 1, 13, 435, 382, 5),
(14, 1, 14, 160, 122, 3),
(15, 1, 15, 486, 395, 5),
(16, 1, 16, 148, 112, 3),
(17, 1, 17, 333, 307, 4),
(18, 1, 18, 306, 290, 4);

-- --------------------------------------------------------

--
-- Table structure for table `hole`
--

CREATE TABLE `hole` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `score` int(11) NOT NULL,
  `bunkers` int(11) NOT NULL,
  `fairways` int(11) NOT NULL,
  `putts` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Dumping data for table `hole`
--

INSERT INTO `hole` (`id`, `score`, `bunkers`, `fairways`, `putts`) VALUES
(1, 0, 0, 0, 0),
(2, 0, 0, 0, 0),
(3, 0, 0, 0, 0),
(4, 0, 0, 0, 0),
(5, 0, 0, 0, 0),
(6, 0, 0, 0, 0),
(7, 0, 0, 0, 0),
(8, 0, 0, 0, 0),
(9, 0, 0, 0, 0),
(10, 0, 0, 0, 0),
(11, 0, 0, 0, 0),
(12, 0, 0, 0, 0),
(13, 0, 0, 0, 0),
(14, 0, 0, 0, 0),
(15, 0, 0, 0, 0),
(16, 0, 0, 0, 0),
(17, 0, 0, 0, 0),
(18, 0, 0, 0, 0),
(19, 0, 0, 0, 0),
(20, 0, 0, 0, 0),
(21, 0, 0, 0, 0),
(22, 0, 0, 0, 0),
(23, 0, 0, 0, 0),
(24, 0, 0, 0, 0),
(25, 0, 0, 0, 0),
(26, 0, 0, 0, 0),
(27, 0, 0, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
