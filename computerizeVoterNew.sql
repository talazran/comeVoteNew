USE [master]
GO
/****** Object:  Database [ComputerizedVoting]    Script Date: 11/06/2019 20:58:55 ******/
CREATE DATABASE [ComputerizedVoting]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ComputerizedVoting', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER01\MSSQL\DATA\ComputerizedVoting.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ComputerizedVoting_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER01\MSSQL\DATA\ComputerizedVoting_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ComputerizedVoting] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ComputerizedVoting].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ComputerizedVoting] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET ARITHABORT OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ComputerizedVoting] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ComputerizedVoting] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ComputerizedVoting] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ComputerizedVoting] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET RECOVERY FULL 
GO
ALTER DATABASE [ComputerizedVoting] SET  MULTI_USER 
GO
ALTER DATABASE [ComputerizedVoting] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ComputerizedVoting] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ComputerizedVoting] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ComputerizedVoting] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ComputerizedVoting] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'ComputerizedVoting', N'ON'
GO
ALTER DATABASE [ComputerizedVoting] SET QUERY_STORE = OFF
GO
USE [ComputerizedVoting]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [ComputerizedVoting]
GO
/****** Object:  Table [dbo].[BallotBox]    Script Date: 11/06/2019 20:58:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BallotBox](
	[id] [int] NOT NULL,
	[numBallot] [int] NOT NULL,
	[cityId] [int] NOT NULL,
 CONSTRAINT [PK_BallotBox1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[City]    Script Date: 11/06/2019 20:58:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[id] [int] NOT NULL,
	[areaKod] [nvarchar](50) NOT NULL,
	[cityName] [nvarchar](50) NOT NULL,
	[nowCountValid] [int] NOT NULL,
	[allCountValid] [int] NOT NULL,
 CONSTRAINT [PK_City1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Factions]    Script Date: 11/06/2019 20:58:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Factions](
	[Id] [int] NOT NULL,
	[factionName] [nvarchar](100) NOT NULL,
	[voters] [int] NOT NULL,
	[leadersMail] [nvarchar](30) NOT NULL,
	[factionPic] [nvarchar](50) NOT NULL,
	[IsAgree] [bit] NOT NULL,
 CONSTRAINT [PK_Factions1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FinalResults]    Script Date: 11/06/2019 20:58:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FinalResults](
	[idFaction] [int] NOT NULL,
	[idVote] [int] NOT NULL,
	[numberOfVote] [int] NOT NULL,
 CONSTRAINT [PK_FinalResults1] PRIMARY KEY CLUSTERED 
(
	[idFaction] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Managers]    Script Date: 11/06/2019 20:58:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Managers](
	[MIdentity] [nvarchar](50) NOT NULL,
	[MFullName] [nvarchar](30) NOT NULL,
	[MUserName] [nvarchar](15) NOT NULL,
	[MPassword] [nvarchar](10) NOT NULL,
	[NumStatus] [nvarchar](6) NOT NULL,
	[MCity] [int] NULL,
	[MNumBallotBox] [int] NULL,
	[MailM] [nchar](30) NOT NULL,
 CONSTRAINT [PK_Managers1] PRIMARY KEY CLUSTERED 
(
	[MIdentity] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ManagersStatus]    Script Date: 11/06/2019 20:58:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ManagersStatus](
	[numStatus] [nvarchar](6) NOT NULL,
	[status] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_ManagersStatus1] PRIMARY KEY CLUSTERED 
(
	[numStatus] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[National]    Script Date: 11/06/2019 20:58:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[National](
	[Identity] [nvarchar](9) NOT NULL,
	[fullName] [nvarchar](30) NOT NULL,
	[street] [nvarchar](50) NOT NULL,
	[zipCode] [nvarchar](50) NOT NULL,
	[numHouse] [nvarchar](5) NOT NULL,
	[cityId] [int] NOT NULL,
	[numBallot] [int] NOT NULL,
	[IsChoose] [bit] NOT NULL,
 CONSTRAINT [PK_National1] PRIMARY KEY CLUSTERED 
(
	[Identity] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Voting]    Script Date: 11/06/2019 20:58:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Voting](
	[kodVote] [int] NOT NULL,
	[dateVote] [date] NOT NULL,
	[ballotsOpen] [time](7) NOT NULL,
	[ballotsClose] [time](7) NOT NULL,
 CONSTRAINT [PK_Voting] PRIMARY KEY CLUSTERED 
(
	[kodVote] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[BallotBox] ([id], [numBallot], [cityId]) VALUES (4, 8, 1)
INSERT [dbo].[BallotBox] ([id], [numBallot], [cityId]) VALUES (5, 24, 2)
INSERT [dbo].[BallotBox] ([id], [numBallot], [cityId]) VALUES (6, 95, 3)
INSERT [dbo].[BallotBox] ([id], [numBallot], [cityId]) VALUES (7, 152, 4)
INSERT [dbo].[BallotBox] ([id], [numBallot], [cityId]) VALUES (8, 289, 5)
INSERT [dbo].[BallotBox] ([id], [numBallot], [cityId]) VALUES (12, 307, 6)
INSERT [dbo].[BallotBox] ([id], [numBallot], [cityId]) VALUES (13, 575, 3)
INSERT [dbo].[BallotBox] ([id], [numBallot], [cityId]) VALUES (14, 841, 1)
INSERT [dbo].[BallotBox] ([id], [numBallot], [cityId]) VALUES (15, 951, 8)
INSERT [dbo].[City] ([id], [areaKod], [cityName], [nowCountValid], [allCountValid]) VALUES (1, N'452', N'תל אביב', 4, 500000)
INSERT [dbo].[City] ([id], [areaKod], [cityName], [nowCountValid], [allCountValid]) VALUES (2, N'475', N'נתיבות', 0, 149000)
INSERT [dbo].[City] ([id], [areaKod], [cityName], [nowCountValid], [allCountValid]) VALUES (3, N'552', N'בתים', 0, 235000)
INSERT [dbo].[City] ([id], [areaKod], [cityName], [nowCountValid], [allCountValid]) VALUES (4, N'114', N'אשקלון', 0, 321000)
INSERT [dbo].[City] ([id], [areaKod], [cityName], [nowCountValid], [allCountValid]) VALUES (5, N'663', N'ירושלים', 0, 800972)
INSERT [dbo].[City] ([id], [areaKod], [cityName], [nowCountValid], [allCountValid]) VALUES (6, N'338', N'חיפה', 0, 700421)
INSERT [dbo].[City] ([id], [areaKod], [cityName], [nowCountValid], [allCountValid]) VALUES (7, N'321', N'קרית שמונה', 0, 187542)
INSERT [dbo].[City] ([id], [areaKod], [cityName], [nowCountValid], [allCountValid]) VALUES (8, N'223', N'חדרה', 0, 214570)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (11254, N'כולנו הימין השפוי בראשות משה כחלון', 0, N'kulanu24@gmail.com', N'kulanu.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (12445, N'ישראל ביתנו בראשות אביגדור ליברמן', 0, N'israelB@gmail.com', N'lamed.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (12548, N'אופק חדש בכבוד', 0, N'ofekH@gmail.com', N'ofekHadash.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (14427, N'שווים', 0, N'shavim@gmail.com', N'shalom.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (14527, N'כחול לבן בראשות בני גנץ ויאיר לפיד', 0, N'kaholL@gmail.com', N'pe.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (14552, N'אחריות למייסדים בראשות חיים דיין', 0, N'ahayutM@gmail.com', N'yaz.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (14855, N'הפיראטים בראשות האינטרנט פתק לשלשול', 0, N'hpiratim@gmail.com', N'pz.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (15211, N'כלכלה ירוקה – מדינה אחת', 0, N'calcalaY@gmail.com', N'kalkalaYeruka.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (15448, N'גשר בראשות אורלי לוי אבקסיס', 0, N'gesher@gmail.com', N'ner.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (15464, N'מגן בראשות גל הירש', 0, N'magen@gmail.com', N'nez.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (15484, N'מרצ – השמאל של ישראל', 0, N'merez@gmail.com', N'merez.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (15485, N'התקווה לשינוי', 0, N'tikvaL@gmail.com', N'tikvaLshinui.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (15548, N'ארץ ישראל שלנו', 0, N'israelS@gmail.com', N'ky.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (18413, N'האזרחים הוותיקים', 0, N'ezrahV@gmail.com', N'zi.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (18874, N'אורן חזן בראשות צומת', 0, N'orenH@gmail.com', N'zomet.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (20552, N'הליכוד', 0, N'halicud11@gmail.com', N'mahal.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (21545, N'מהתחלה', 0, N'theFirst@gmail.com', N'ken.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (41125, N'זהות-תנועה ישראלית יהודית בהנהגת משה פייגלין', 0, N'zehutM1@gmail.com', N'zehut.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (47895, N'הרשימה הערבית בראשות מוחמד כנעאן', 0, N'arabic@gmail.com', N'resh.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (54522, N'כבוד האדם', 0, N'kvodA@gmail.com', N'kvodAdam.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (57441, N'הימין החדש', 0, N'newRight@gmail.com', N'yeminHadash.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (74745, N'כל ישראל אחים ופעולה לישראל', 0, N'brothers&play@gmail.com', N'kef.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (74888, N'זכויותינו בקולנו', 0, N'zhuyotenuK@gmail.com', N'nz.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (74945, N'ברית עולם', 0, N'britWourld@gmail.com', N'zah.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (75454, N'איחוד בני הברית בראשות רב חובל בשארה שליאן', 0, N'ravH@gmail.com', N'ihud.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (76524, N'יהדות התורה והשבת אגודת ישראל – דגל התורה', 0, N'gimel021@gmail.com', N'ofekHadash.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (78412, N'צדק חברתי', 0, N'zedekH@gmail.com', N'zedekHevraty.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (78454, N' הגוש התנ"כי', 0, N'gushT@gmail.com', N'gushTanachi.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (78856, N'פשוט אהבה   כי כולן/ם בני אדם', 0, N'pashutAhava@gmail.com', N'py.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (79892, N'מנהיגות חברתית', 0, N'manhigutH@gmail.com', N'manhigutHevratit.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (81452, N'ישר דמוקרטיה אמיתית', 0, N'yashar@gmail.com', N'yashar.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (86533, N'נ נח הרשימה הממלכתית', 0, N'nanach@gmail.com', N'mamlahtit.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (87458, N'צדק לכל כי הגיעה העת למען החי האדם', 0, N'zekekL@gmail.com', N'kuf.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (88742, N'התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף', 0, N'shas123@gmail.com', N'shas.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (91125, N'יחד בראשות אלי', 0, N'yachad@gmail.com', N'h                                                 ', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (93521, N'חינוך', 0, N'hinuch478@gmail.com', N'hinuh.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (96541, N'חד"ש תע"ל בראשות איימן עודה ואחמד', 0, N'tibiTahal@gmail.com', N'hadash.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (97552, N'איחוד מפלגות', 0, N'yaminUnit@gmail.com', N'tv.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (98571, N'מפלגת', 0, N'reform@gmail.com', N'j                                                 ', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (98885, N'רע"מ-בל"ד – הרשימה הערבית המאוחדת ברית לאומית', 0, N'balad33@gmail.com', N'da`am.png', 1)
INSERT [dbo].[Factions] ([Id], [factionName], [voters], [leadersMail], [factionPic], [IsAgree]) VALUES (99687, N'אני ואתה  מפלגת העם הישראלית בהובלת דר'' אלון גלעדי', 0, N'youAI@gmail.com', N'zy.png', 1)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (11254, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (12445, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (12548, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (14427, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (14527, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (14552, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (14855, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (15211, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (15448, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (15484, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (15485, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (15548, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (18413, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (18874, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (20552, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (21545, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (41125, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (47895, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (54522, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (57441, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (74745, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (74888, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (74945, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (75454, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (76524, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (78412, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (78454, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (78856, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (79892, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (81452, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (86533, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (87458, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (88742, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (91125, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (93521, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (96541, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (97552, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (98571, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (98885, 47881, 0)
INSERT [dbo].[FinalResults] ([idFaction], [idVote], [numberOfVote]) VALUES (99687, 47881, 0)
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'004342861', N'אנבי יונה', N'yy0043', N'004342861', N'2', 2, NULL, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'008471256', N'יהודית גיבלי', N'yy0084', N'008471256', N'3', 1, 4, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'009273434', N'אברהמי יונה', N'yy0092', N'009273434', N'2', 3, NULL, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'029493887', N'עדי טפלון', N'aa0294', N'029493887', N'1', NULL, NULL, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'033748302', N'אגנטיין לאה', N'll0337', N'033748302', N'2', 2, NULL, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'044786235', N'רינת גבאי', N'rr0447', N'044786235', N'3', 8, 15, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'055489444', N'עמוס כחלון', N'aa0554', N'055489444', N'2', 5, NULL, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'066457182', N'חגי דיבון', N'hh0664', N'066457182', N'3', 6, 12, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'099874562', N'מיה נעים', N'mm0998', N'099874562', N'3', 6, 12, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'104487953', N'מרדכי אוטרי', N'mm1044', N'104487953', N'2', 4, NULL, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'108874695', N'יוסף עזרן', N'yy1088', N'108874695', N'3', 6, 12, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'204471689', N'דוד בלוי', N'dd2044', N'204471689', N'2', 2, NULL, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'206646176', N'הדס זר', N'hh2066', N'206646176', N'2', 7, NULL, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'207068115', N'יעל ג''ובאני', N'yy2070', N'207068115', N'2', 2, NULL, N'a                             ')
INSERT [dbo].[Managers] ([MIdentity], [MFullName], [MUserName], [MPassword], [NumStatus], [MCity], [MNumBallotBox], [MailM]) VALUES (N'208180695', N'טל עזרן', N'tt2081', N'208180695', N'3', 3, 13, N'a                             ')
INSERT [dbo].[ManagersStatus] ([numStatus], [status]) VALUES (N'1', N'מנהל ראשי')
INSERT [dbo].[ManagersStatus] ([numStatus], [status]) VALUES (N'2', N'מנהל עיר')
INSERT [dbo].[ManagersStatus] ([numStatus], [status]) VALUES (N'3', N'מנהל קלפי')
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'000875559', N'הראל אסתר', N'בית וגן', N'9642716', N'40', 5, 289, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'003040300', N'מיכאלי קלמן', N'לח''''י', N'3845605', N'5', 3, 951, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'003647818', N'ואקנין מאיר', N'הרב אבוחצירא', N'8773602', N'3', 6, 307, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'004499989', N'וייס עליזה', N'בן יהודה', N'6340124', N'112', 7, 841, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'004607156', N'זגלבוים מרים', N'החשמל', N'3262607', N'57', 8, 307, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'005627476', N'אלרועי יואש', N'אשכולי פז', N'7876502', N'2', 1, 152, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'007149891', N'מילר רבקה', N'דרך השלום', N'6789214', N'12', 5, 841, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'007812233', N'דור מנחם', N'מבוא אמנה', N'1160615', N'10', 4, 575, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'009652280', N'פרץ אשר', N'דפנה', N'6492030', N'40', 8, 841, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'016255721', N'גורוביץ אווה', N'ז''בוטינסקי', N'5944513', N'25', 3, 95, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'016788663', N'פרלוב ולדימור', N'דרך השלום', N'6789214', N'15', 1, 841, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'060493731', N'בן צור מרסל', N'הזית', N'5020000', N'50', 1, 8, 1)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'062083837', N'צדון לאה', N'בית וגן', N'9642716', N'46', 5, 289, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'068825090', N'פרץ מרגריטה', N'החשמל', N'3262607', N'62', 6, 307, 0)
INSERT [dbo].[National] ([Identity], [fullName], [street], [zipCode], [numHouse], [cityId], [numBallot], [IsChoose]) VALUES (N'070934013', N'צדקה ציון', N'בית וגן', N'9642716', N'62', 1, 8, 0)
INSERT [dbo].[Voting] ([kodVote], [dateVote], [ballotsOpen], [ballotsClose]) VALUES (47881, CAST(N'2019-04-03' AS Date), CAST(N'07:00:00' AS Time), CAST(N'22:00:00' AS Time))
ALTER TABLE [dbo].[BallotBox]  WITH CHECK ADD  CONSTRAINT [FK_BallotBox1_City1] FOREIGN KEY([cityId])
REFERENCES [dbo].[City] ([id])
GO
ALTER TABLE [dbo].[BallotBox] CHECK CONSTRAINT [FK_BallotBox1_City1]
GO
ALTER TABLE [dbo].[FinalResults]  WITH CHECK ADD  CONSTRAINT [FK_FinalResults1_Factions1] FOREIGN KEY([idFaction])
REFERENCES [dbo].[Factions] ([Id])
GO
ALTER TABLE [dbo].[FinalResults] CHECK CONSTRAINT [FK_FinalResults1_Factions1]
GO
ALTER TABLE [dbo].[FinalResults]  WITH CHECK ADD  CONSTRAINT [FK_FinalResults1_Voting] FOREIGN KEY([idVote])
REFERENCES [dbo].[Voting] ([kodVote])
GO
ALTER TABLE [dbo].[FinalResults] CHECK CONSTRAINT [FK_FinalResults1_Voting]
GO
ALTER TABLE [dbo].[Managers]  WITH CHECK ADD  CONSTRAINT [FK_Managers_BallotBox] FOREIGN KEY([MNumBallotBox])
REFERENCES [dbo].[BallotBox] ([id])
GO
ALTER TABLE [dbo].[Managers] CHECK CONSTRAINT [FK_Managers_BallotBox]
GO
ALTER TABLE [dbo].[Managers]  WITH CHECK ADD  CONSTRAINT [FK_Managers_City1] FOREIGN KEY([MCity])
REFERENCES [dbo].[City] ([id])
GO
ALTER TABLE [dbo].[Managers] CHECK CONSTRAINT [FK_Managers_City1]
GO
ALTER TABLE [dbo].[Managers]  WITH CHECK ADD  CONSTRAINT [FK_Managers_ManagersStatus] FOREIGN KEY([NumStatus])
REFERENCES [dbo].[ManagersStatus] ([numStatus])
GO
ALTER TABLE [dbo].[Managers] CHECK CONSTRAINT [FK_Managers_ManagersStatus]
GO
ALTER TABLE [dbo].[National]  WITH CHECK ADD  CONSTRAINT [FK_National1_City1] FOREIGN KEY([cityId])
REFERENCES [dbo].[City] ([id])
GO
ALTER TABLE [dbo].[National] CHECK CONSTRAINT [FK_National1_City1]
GO
USE [master]
GO
ALTER DATABASE [ComputerizedVoting] SET  READ_WRITE 
GO
