package rodolphe;

import io.vertigo.boot.xml.XMLModulesBuilder;
import io.vertigo.core.Home.App;
import io.vertigo.core.config.AppConfig;
import io.vertigo.core.config.AppConfigBuilder;
import io.vertigo.vega.plugins.rest.routesregister.sparkjava.SparkJavaRoutesRegister;
import spark.Spark;

public final class Rodolphe {
	public static void main(final String[] args) throws Exception {
		final AppConfig appConfig = new AppConfigBuilder()
				.withModules(new XMLModulesBuilder()
						.withXmlFileNames(Rodolphe.class, "/boot/xml/foundation.xml", "/boot/xml/services.xml", "/boot/xml/webservices.xml")
						.build())
				.build();
		//---
		Spark.setPort(8080);
		final App app = new App(appConfig);
		Runtime.getRuntime().addShutdownHook(new Thread() {
			@Override
			public void run() {
				try {
					System.out.println("Try to close " + app);
					app.close();
				} catch (final Exception e) {
					System.err.println("Can't close " + app + " : " + e.toString());
					e.printStackTrace(System.err);
				}
			}
		});
		//		final String tempDir = System.getProperty("java.io.tmpdir");
		//		Spark.before(new JettyMultipartConfig(tempDir));
		new SparkJavaRoutesRegister().init();
		System.in.read();
	}
}