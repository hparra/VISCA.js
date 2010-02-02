var VISCA = {
	CAM_Zoom: {
		Stop: function(x) {
			return "8" + x + " 01 04 07 00 FF";
		},
		TeleStandard: function(x,p) {
			return "8" + x + " 01 04 07 2" + p + " FF";
		},
		WideStandard: function(x,p) {
			return "8" + x + " 01 04 07 3" + p + " FF";
		}
	},
	CAM_Backlight: {
		On: function(x) {
			return "8" + x + " 01 04 33 02 FF";
		},
		Off: function(x) {
			return "8" + x + " 01 04 33 03 FF";
		}
	},
	Pan_tiltDrive: {
		Up: function(x, v, w) {
			return "8" + x + " 01 06 01 " + v + " " + w +" 03 01 FF";
		},
		Down: function(x, v, w) {
			return "8" + x + " 01 06 01 " + v + " " + w +" 03 02 FF";
		},
		Left: function(x, v, w) {
			return "8" + x + " 01 06 01 " + v + " " + w +" 01 03 FF";
		},
		Right: function(x, v, w) {
			return "8" + x + " 01 06 01 " + v + " " + w +" 02 03 FF";
		},
		Stop: function(x, v, w) {
			return "8" + x + " 01 06 01 " + v + " " + w +" 03 03 FF";
		},
		Home: function(x) {
			return "8" + x + " 01 06 04 FF";
		}
	}
}

