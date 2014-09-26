 <script>
		function pageSelectChange(selObj) {
		eval("self.location='"+ selObj.options[selObj.selectedIndex].value+"'");
		}
</script>
<script>
	$(document).ready(function(){
		$("#harta").click(function(){
			$("#c").toggle();
		});
		
	});
</script>
	 
	 	<script>
	$(document).ready(function(){
		$("#harta").click(function(){
			$("#c").toggle();
		});
		
	});
	</script>

	
		<script>
		$(document).ready(function(){
		$("#galeriea").click(function(){
			$("#afiseaza").toggle().html("<p><hr><img src='../arosafoto.gif' width='80%' height='50%'></p>");
		});
		});
		</script>
		
		
		<script>
		$(document).ready(function(){
		$("#dotoptarosa").click(function(){
			$("#afiseaza").toggle().html("<p ><hr><table id='toa'><caption>Dotari Optionale</caption><tr><th>DENUMIRE</th><th>PRET CIP(EURO)</th><th>PRET DDP(EURO)MOTORINA</th><th>PRET DDP(EURO)BENZINA</th></tr><tr><td>Airbag lateral(inclus airbag sofer)</td>	<td>216</td><td>270</td><td>274</td></tr><tr style='background-color:lightgrey;'><td >Trapa actionata electric</td><td>435</td><td>544</td><td>527</td></tr><tr><td >Culoare metalizata</td><td>249</td><td>329</td><td>333</td></tr><tr style='background-color:lightgrey;'><td >Airbag pasager</td><td>181</td><td>226</td><td>229</td></tr><tr><td>Jante aliaj usor</td>					<td>286</td><td>358</td><td>364</td></tr><tr style='background-color:lightgrey;'><td >Senzor ploaie</td><td>100</td><td>125</td><td>126</td></tr></table></p>");
		});
		});
		</script>
		
			<script>
		$(document).ready(function(){
		$("#dotstdarosa").click(function(){
			$("#afiseaza").toggle().html("<p><hr><table id='tsa'><caption>Dotari Standard</caption><tr style='background-color:#FFFFCC;'><th>Date tehnice</th><td>1.0l</td><td>1.4l</td><td>1.6l</td>				<td>1.6aut</td><td>1.9</td></tr><tr style='background-color:#CCCC00;'><th>Putere max</th><td>37/50</td>		<td>44/50</td><td>74/100</td><td>74/100</td><td>50/68</td></tr><tr style='background-color:#FFFFCC;'>			<th>Viteza maxima(km/h)</th><td>145</td><td>157</td><td>188</td><td>184</td><td>161</td></tr><tr style='background-color:#CCCC00;'><th>Acceleratia 0-100(sec)</th><td>15.9</td><td>15.1</td><td>10.7</td>		<td>12.5</td><td>16</td></tr><tr style='background-color:#FFFFCC;'><th>Consum(l/100 km)urban/extraurban/mediu</th>	<td>8.4/5.2/6.4</td><td>8.8/5.3/6.6</td><td>10.9/6.0/7.8</td><td>11.7/6.5/8.4</td><td>6.7/4/5</td></tr></table></p>");
				
		});
		});
		</script>
		
