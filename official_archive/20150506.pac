//===============================================================
// Yuan Ze University Office of Library and Information Services
// Proxy Auto Configure
// Any comments, please contact http://proxy.yzu.edu.tw
//===============================================================

function FindProxyForURL(url, host) {
	// DIRECT urls
	if (dnsDomainIs(host, "localhost")			
			|| isInNet(host,"192.168.0.0","255.255.0.0")
			|| isInNet(host,"127.0.0.0","255.0.0.0")
			|| isInNet(host,"10.0.0.0","255.0.0.0")
			|| dnsDomainIs(host,".mlstat.com")
			|| dnsDomainIs(host,".msftncsi.com") 
			|| dnsDomainIs(host,".cic.narl.org.tw")
			|| dnsDomainIs(host,".most.gov.tw")
			|| dnsDomainIs(host,".mms.vlog.xuite.net")

			
		)
		
	{
	return "DIRECT";
//	return "PROXY proxy3.yzu.edu.tw:8080";
	}
	
	else if(isPlainHostName(host)
			|| dnsDomainIs(host,"lcss.hinet.net")
			|| dnsDomainIs(host,"nonamexpe.duc.cc")
			|| dnsDomainIs(host,"connexion.oclc.org")
			|| dnsDomainIs(host,"clientcenter.serialssolutions.com")
			|| dnsDomainIs(host,"dm.mlstat.com")
			|| dnsDomainIs(host,".caac.ccu.edu.tw")
			|| dnsDomainIs(host,"audp.tyc.edu.tw")
			|| dnsDomainIs(host,"140.115.2.53")
			|| dnsDomainIs(host,".nsc.gov.tw")
			|| dnsDomainIs(host,".ncl.edu.tw")
			|| dnsDomainIs(host,"vpn.iii.org.tw")
			|| dnsDomainIs(host,"192.192.58.109")
			|| dnsDomainIs(host,"192.83.186.202")
			|| dnsDomainIs(host,".yzu.edu.tw")
			|| isInNet(host, "220.134.137.134", "255.255.255.255")
			|| isInNet(host, "140.138.0.0", "255.255.0.0")
		)
	{
	return "DIRECT";
//	return "PROXY proxy3.yzu.edu.tw:8080";
	}

	
	else if (dnsDomainIs(host,".ntu.edu.tw")
			|| dnsDomainIs(host,"utaipei.edu.tw")
			|| dnsDomainIs(host,"tnua.edu.tw")
			|| dnsDomainIs(host,"mcu.edu.tw")
			|| dnsDomainIs(host,"ttu.edu.tw")
			|| dnsDomainIs(host,"ntut.edu.tw")
			|| dnsDomainIs(host,"ntust.edu.tw")
			|| dnsDomainIs(host,"ntnu.edu.tw")
			|| dnsDomainIs(host,"tmu.edu.tw")
			|| dnsDomainIs(host,"ntunhs.edu.tw")
			|| dnsDomainIs(host,"ntcb.edu.tw")
			|| dnsDomainIs(host,"ntua.edu.tw")
			|| dnsDomainIs(host,"ddbc.edu.tw")
			|| dnsDomainIs(host,"hwh.edu.tw")
			|| dnsDomainIs(host,"lit.edu.tw")
			|| dnsDomainIs(host,"lhu.edu.tw")
			|| dnsDomainIs(host,"oit.edu.tw")
			|| dnsDomainIs(host,"tcmt.edu.tw")
			|| dnsDomainIs(host,"knjc.edu.tw")
			|| dnsDomainIs(host,"dlit.edu.tw")
			|| dnsDomainIs(host,"tprc.tanet.edu.tw")
		)
	{
	return "PROXY proxy6.yzu.edu.tw:8080";
//    return "PROXY proxy3.yzu.edu.tw:8080";
	}
	
	
	else if (dnsDomainIs(host,".edu.tw")
			|| dnsDomainIs(host,".edu")
			|| dnsDomainIs(host,"hichannel.hinet.net")
			|| dnsDomainIs(host,".cdn.hinet.net")
			|| dnsDomainIs(host,".media.hinet.net")
			|| dnsDomainIs(host,".appledaily.com.tw")
			|| dnsDomainIs(host,".cic.org.tw")
		)
	{
	return "PROXY proxy2.yzu.edu.tw:8080";
//    return "PROXY proxy3.yzu.edu.tw:8080";
	}
	
	else if (isInNet(myIpAddress(),"140.138.223.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.224.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.225.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.226.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.227.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.228.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.229.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.230.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.231.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.232.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.233.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.240.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.241.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.242.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.243.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.244.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.246.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.247.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.248.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.249.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.238.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.239.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.234.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.235.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.236.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.237.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.252.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.32.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.33.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.34.0","255.255.255.0")
			 ) 
	 {
		 return "PROXY proxy7.yzu.edu.tw:8080";
	 } 
	 	
	else {
		return "PROXY proxy.yzu.edu.tw:8080";
	}
}
